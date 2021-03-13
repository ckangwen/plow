import * as Path from 'path'
import * as fse from 'fs-extra'
import axios from 'axios'
import * as Lowdb from 'lowdb'
import { getAndExtractTarball } from 'ice-npm-utils'
import { createServiceDB } from '../../shared/db'
import { log } from '../utils/log'
import { createResolveVueAliasFactory, __DEV__, ViewRootDevPath } from '../../shared/index'
import { resolve } from 'path'

export default class TemplateGenerator {
  viewRootPath: string
  db: Lowdb.LowdbSync<any>
  resolveVueAlias: (str: string) => string
  cache: Record<string, string> = {}

  constructor (base: string) {
    this.viewRootPath = base
    this.db = createServiceDB(resolve(__dirname, '../../data/db.json'))
    this.resolveVueAlias = createResolveVueAliasFactory(__DEV__ ? ViewRootDevPath : base)
  }

  getTemplateList () {
    const list = this.db.get('templates').value() || {}
    this.db = createServiceDB(resolve(__dirname, '../../data/db.json'))
    return list
  }

  /**
   * dirName 文件夹名
   * packageName 包名
   * output: 输出的文件夹路径
   */
  async downloadPackageToLocal ({
    dirName,
    packageName,
    output,
    overWrite = false
  }: {
    dirName: string
    packageName: string
    output: string
    overWrite?: boolean
  }) {
    log.info(`[TemplateGenerator.downloadPackageToLocal] 下载${packageName}包至本地`)

    let tarballURL = ''
    const blockDir = Path.join(output, dirName)
    console.log(blockDir)
    if (fse.existsSync(blockDir) && !overWrite) {
      return
    }
    const blockTempDir = Path.join(output, `.${dirName}.temp`)

    // 检查包版本或添加新的包数据
    const pkgData = await this.checkPackageData(packageName)
    tarballURL = pkgData.tarball

    try {
      // 将包下载到blockTempDir
      await getAndExtractTarball(blockTempDir, tarballURL)
    } catch (error) {
      throw new Error(`${packageName}下载失败`)
    }
    const source = Path.join(blockTempDir, 'src')
    console.log(source, blockDir)
    await fse.copySync(source, blockDir)
    fse.removeSync(blockTempDir)
  }

  async downloadTemplateToLocal ({ output, url, name }: { output: string, url: string, name: string }) {
    log.info('[TemplateGenerator.downloadTemplateToLocal] 下载模板至本地 ' + output)

    if (output && url) {
      let content = ''
      if (this.cache[name]) {
        content = this.cache[name]
      } else {
        const res = await axios(url)
        content = res.data
      }
      output = this.resolveVueAlias(output)
      if (!fse.existsSync(output)) {
        fse.createFileSync(output)
      }
      fse.writeFileSync(output, content, 'utf-8')
    }
  }

  async checkPackageData (packageName: string) {
    const pkgData = this.db.get(`packages.${packageName}`).value()

    // npm包的信息
    const { data } = await axios(`https://registry.npmjs.org/${packageName}`)
    // 最新版本号
    const lastestVersion = data['dist-tags'].latest

    // 获取最新版包的信息
    const lastestVersionData = data.versions[lastestVersion]
    // 需要插入到本地数据库中的字段
    const keys = ['version', 'description', 'keywords']

    // 如果版本变动，或是没有该包，则更新本地数据库
    if (!pkgData || (pkgData && pkgData.version !== lastestVersion)) {
      keys.forEach(key => {
        this.db
          .set(`packages.${packageName}.${key}`, lastestVersionData[key])
          .write()
      })
      this.db
        .set(`packages.${packageName}.tarball`, lastestVersionData.dist.tarball)
        .write()
    }
    return this.db.get(`packages.${packageName}`).value()
  }
}

export const createTemplateGenerator = (viewRootPath: string) => {
  let generator: TemplateGenerator | null = null
  if (generator) return generator

  generator = new TemplateGenerator(viewRootPath)
  return generator!
}
