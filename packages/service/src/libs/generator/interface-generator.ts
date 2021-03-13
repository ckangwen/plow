import * as Types from '@babel/types'
import * as ejs from 'ejs'
import * as prettier from 'prettier'
import * as fse from 'fs'
import { resolve } from 'path'
import { log } from '../utils/log'
import { ApiTemplateRenderData } from '../../types/index'
import { BaseGenerator } from './base-generator'

const ApiTemplateDir = resolve(__dirname, '../../templates/api.ejs')

type ApiStorageData = {
  functionName: string
  url: string
}

export class InterfaceGenerator extends BaseGenerator {
  apiFileBasePath: string
  collection: Record<string, ApiStorageData[]>
  constructor (path: string) {
    super()
    this.apiFileBasePath = path
    this.collection = {}
  }

  render (filename: string, apis: ApiTemplateRenderData[]) {
    log.info('[ApiGenerator.render] 生成接口对接文件')

    let content = fse.readFileSync(ApiTemplateDir, 'utf-8')
    content = ejs.render(content, {
      apis
    })
    content = prettier.format(content, {
      parser: 'babel'
    })

    const apiFilePath = resolve(this.apiFileBasePath, `./${filename}.js`)
    console.log(apiFilePath)

    fse.writeFileSync(apiFilePath, content, 'utf-8')
  }

  readApiContent (filename: string) {
    const filepath = resolve(this.apiFileBasePath, filename)
    const content = fse.readFileSync(filepath, 'utf-8')
    return content
  }

  parseApiFile (filename: string) {
    let nameNoExt = ''
    if (filename.endsWith('.js')) {
      nameNoExt = filename.slice(0, -3)
    } else {
      nameNoExt = filename
      filename = `${filename}.js`
    }
    const ast = this.codeToAST(this.readApiContent(filename))

    const body = ast.program.body
    this.collection[nameNoExt] = []

    const parseFunctionDeclaration = (node?: Types.FunctionDeclaration | Types.VariableDeclaration) => {
      if (!node) return

      if (Types.isFunctionDeclaration(node)) {
        if (Types.isIdentifier(node.id)) {
          const functionName = node.id.name
          if (Types.isBlockStatement(node.params)) {
            const returnStatement = node.params.body.find(t => Types.isReturnStatement(t)) as Types.ReturnStatement
            const url = this.getRequestUrl(returnStatement.argument)

            if (url && functionName) {
              return {
                functionName,
                url
              }
            }
          }
        }
      }
      if (Types.isVariableDeclaration(node)) {
        node.declarations.forEach(item => {
          if (Types.isIdentifier(item.id)) {
            const functionName = item.id.name
            if (Types.isArrowFunctionExpression(item.init)) {
              if (Types.isBlockStatement(item.init.body)) {
                const returnStatement = item.init.body.body.find(t => Types.isReturnStatement(t)) as Types.ReturnStatement
                const url = this.getRequestUrl(returnStatement.argument)

                if (url && functionName) {
                  return {
                    functionName,
                    url
                  }
                }
              }
            }
          }
        })
      }
    }

    body.forEach(node => {
      if (Types.isExportNamedDeclaration(node)) {
        const obj = parseFunctionDeclaration(node.declaration as any)
        if (obj) {
          this.collection[nameNoExt].push(obj)
        }
      }
    })
  }

  private getRequestUrl (node: any) {
    let url = ''
    if (Types.isIdentifier(node.callee)) {
      const requestFunctionName = node.callee.name
      if (requestFunctionName === 'request') {
        node.arguments.forEach((arg: object | null | undefined) => {
          // request({ url, method, data })
          if (Types.isObjectExpression(arg)) {
            const urlPropNode = arg.properties.find(prop => {
              if (Types.isObjectProperty(prop)) {
                return (prop.key as Types.Identifier).name === 'url'
              }
              return false
            }) as Types.ObjectProperty

            if (Types.isStringLiteral(urlPropNode.value)) {
              url = urlPropNode.value.value
            }
          }
          // request(url, method, data)
          if (Types.isStringLiteral(arg)) {
            const str = arg.value
            if (str.indexOf('/') > -1) {
              url = str
            }
          }
        })
      }
    }

    return url
  }
}

export const createInterfaceGenerator = (options: string) => {
  let generator: InterfaceGenerator | null = null
  if (generator) return generator

  generator = new InterfaceGenerator(options)
  return generator!
}
