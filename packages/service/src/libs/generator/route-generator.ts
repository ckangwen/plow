/* eslint-disable @typescript-eslint/no-non-null-assertion */
import babelTemplate from '@babel/template'
import babelGenerator from '@babel/generator'
import * as types from '@babel/types'
import traverse from '@babel/traverse'
import * as fse from 'fs'
import { resolve } from 'path'
import * as prettier from 'prettier'
import * as chokidar from 'chokidar'
import * as Lowdb from 'lowdb'
import { ROUTER_CONFIG_JSON_PATH, PAGE_ROUTE_PATH, VIEW_ROOT_PATH } from '../../var/config'
import { log } from '../utils/log'
import { RouteConfigData } from '../../types/index'
import { createViewDB } from '../../shared/db'
import { ObjectChain } from 'lodash'
import { BaseGenerator } from './base-generator'

const routeConfigTemplates = [
  `
  const __route__ = {
    path: PATH,
    name: NAME,
    hidden: HIDDEN,
    meta: {
      icon: ICON,
      title: TITLE,
    },
    component: COMPONENT,
    children: CHILDREN
  }
  `,
  `
  const __route__ = {
    path: PATH,
    name: NAME,
    redirect: REDIRECT,
    hidden: HIDDEN,
    meta: {
      icon: ICON,
      title: TITLE,
    },
    component: COMPONENT,
    children: CHILDREN
  }
`
]

type RouteGeneratorConstructorParams = {
  base: string
  settings?: string
  route?: string
}
const defaultRouteGeneratorConstructorParams = {
  base: VIEW_ROOT_PATH,
  settings: '.settings/route.config.json',
  route: './src/router/page-routes.js'
}

export class RouteGenerator extends BaseGenerator {
  lazyLoadingRouteTemplate = '() => import(PATH)';

  viewRootPath: string
  routeConfigFilePath: string
  routeDefinitionPath: string
  db: Lowdb.LowdbSync<unknown>

  constructor (options: RouteGeneratorConstructorParams = defaultRouteGeneratorConstructorParams) {
    super()
    options = Object.assign({}, defaultRouteGeneratorConstructorParams, options)
    this.viewRootPath = options.base
    this.routeConfigFilePath = resolve(this.viewRootPath, options.settings!)
    this.routeDefinitionPath = resolve(this.viewRootPath, options.route!)
    this.db = createViewDB(this.routeConfigFilePath)
  }

  /**
   * 获取项目路由定义列表ast
   */
  getPageRouteFileAST () {
    const content = fse.readFileSync(this.routeDefinitionPath, 'utf-8')
    return this.codeToAST(content)
  }

  /**
   * 从route.config.json中获取路由配置列表
   */
  readRouteConfigs () {
    const appJSON = fse.readFileSync(this.routeConfigFilePath, { encoding: 'utf-8' })
    const staticConfig = JSON.parse(appJSON)

    if (staticConfig.routes && !Array.isArray(staticConfig.routes)) {
      throw new Error('配置文件中routes应该是一个数组')
    }
    return staticConfig.routes as RouteConfigData[]
  }

  writeRouteConfig (nameChain: string, newRoute: RouteConfigData) {
    log.info('[RouteGenerator.writeRouteConfig] 添加路由配置')
    let db = this.db.get('routes') as ObjectChain<any>

    // 搜寻最后一级路由对象
    nameChain.split('.').forEach(name => {
      if (name) {
        db = db.find({ name }) as ObjectChain<any>
        db = db.get('children') as ObjectChain<any>
      }
    });
    (db as any).push(newRoute).write()
    this.db = createViewDB(this.routeConfigFilePath)
  }

  /**
   * 在router文件夹下生成vue router的routes
   */
  generatePageRoutes () {
    log.info('[RouteGenerator.generatePageRoutes] 生成路由文件')
    console.log(this.readRouteConfigs())
    const routeAsts = this.readRouteConfigs().map(item => this.generateRouteConfigAST(item))
    const ast = this.getPageRouteFileAST()

    traverse(ast, {
      ArrayExpression ({ node, parent }: { node: types.ArrayExpression, parent: any }) {
        if (parent && parent.id && parent.id.name === 'PAGE_ROUTES') {
          node.elements = routeAsts
        }
      }
    })

    let content = babelGenerator(ast).code
    content = prettier.format(content, {
      parser: 'babel'
    })
    fse.writeFileSync(this.routeDefinitionPath, content, 'utf-8')
  }

  refresh () {
    const content = fse.readFileSync(this.routeDefinitionPath, 'utf-8')
    fse.writeFileSync(this.routeDefinitionPath, content, 'utf-8')
  }

  /**
   * 生成路由配置对象的ast
   */
  generateRouteConfigAST (config: RouteConfigData) {
    const { path, name, icon, title = '', redirect = '', hidden, viewPath = '', children = [] } = config
    let routeConfigTemplate = routeConfigTemplates[1]
    if (!redirect) routeConfigTemplate = routeConfigTemplates[0]
    const buildRequire = babelTemplate(routeConfigTemplate)

    let childrenAST = types.arrayExpression()
    if (children && children.length > 0) {
      const arr = children.map(child => this.generateRouteConfigAST(child)).filter(item => !!item) as types.ObjectExpression[]
      childrenAST = types.arrayExpression(arr)
    }

    const buildArg: Record<string, any> = {
      PATH: types.stringLiteral(path || '/'),
      NAME: types.stringLiteral(name),
      HIDDEN: types.booleanLiteral(hidden || false),
      TITLE: types.stringLiteral(title),
      ICON: types.stringLiteral(icon || ''),
      COMPONENT: this.generateRouteComponentAST(path, viewPath),
      CHILDREN: childrenAST
    }
    if (redirect) {
      buildArg.REDIRECT = types.stringLiteral(redirect || '')
    }

    const ast = buildRequire(buildArg) as types.VariableDeclaration

    return ast.declarations[0].init as types.ObjectExpression
  }

  /**
   * router.config.js
   * 添加新的路由配置
   */
  pushToRouteConfig (newRouteAST: types.ObjectExpression) {
    const ast = this.getPageRouteFileAST()

    traverse(ast, {
      ArrayExpression ({ node, parent }: { node: types.ArrayExpression, parent: any }) {
        if (parent && parent.id && parent.id.name === 'ROUTES') {
          node.elements.push(newRouteAST)
        }
      }
    })

    return ast
  }

  pushAsChildren (routeName: string, newRouteAST: types.ObjectExpression) {
    const ast = this.getPageRouteFileAST()
    traverse(ast, {
      ObjectProperty: ({ node, parent }) => {
        // 键名是一个Identifier，且对应的值是一个string类型
        if (types.isIdentifier(node.key) && types.isStringLiteral(node.value)) {
          const keyName = node.key.name
          const valueName = node.value.value

          // 判断name的值是否与所查的字符串一致
          if (keyName === 'name' && valueName === routeName) {
            // 查找出与 name 同级的 children 的ast
            const childNode = (parent as types.ObjectExpression).properties.find(item => {
              if (types.isObjectProperty(item) && types.isIdentifier(item.key)) {
                const keyName = item.key.name
                return keyName === 'children'
              }
              return false
            }) as any

            if (childNode) {
              childNode.value.elements.push(newRouteAST)
            }
          }
        }
      }
    })
    return ast
  }

  /**
   * 生成路由组件的ast
   */
  generateRouteComponentAST (routePath: string, viewPath: string, WrapperComponent = 'Layout') {
    if (routePath.charAt(0) === '/') {
      return types.identifier(WrapperComponent)
    }
    const ast = types.arrowFunctionExpression(
      [],
      types.callExpression(
        types.import(),
        [types.stringLiteral(viewPath)]
      )
    )
    return ast
  }

  /**
   * 如果route.config.json文件发生变化，则重新生成页面路由
   */
  watchRouteConfigFile () {
    log.info('[RouteGenerator.watchRouteConfigFile] 监听路由配置文件router.config.json')

    const watcher = chokidar.watch(ROUTER_CONFIG_JSON_PATH, {
      ignoreInitial: true
    })
    watcher.on('change', () => {
      this.generatePageRoutes()
    })
    watcher.on('error', () => {
      console.log('route.config.js监听失败')
      process.exit(1)
    })
  }
}

export const createRouteGenerator = (options: RouteGeneratorConstructorParams) => {
  let generator: RouteGenerator | null = null
  if (generator) return generator

  generator = new RouteGenerator(options)
  return generator!
}
