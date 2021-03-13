import { createTemplateGenerator } from '../libs/generator/template-generator'
import { ViewRootDevPath, createResolveVueAliasFactory, getPackageName } from '../shared/index'
import * as Path from 'path'
const generator = createTemplateGenerator(ViewRootDevPath)
const componentDir = Path.resolve(ViewRootDevPath, './src/components')

export class TemplateService {
  installedDeps: string[] = []

  list () {
    return generator.getTemplateList()
  }

  downloadPackage ({
    dirName,
    packageName,
    output,
    overWrite = false
  }) {
    try {
      generator.downloadPackageToLocal({
        dirName,
        packageName,
        output,
        overWrite
      })
      return true
    } catch (err) {
      return false
    }
  }

  downloadTemplate ({ output, url, name, dependencies = [] }) {
    const resolveVueAlias = createResolveVueAliasFactory(ViewRootDevPath)
    output = resolveVueAlias(output)

    console.log(dependencies)
    try {
      generator.downloadTemplateToLocal({ output, url, name })

      dependencies.forEach((dep: string) => {
        if (this.installedDeps.indexOf(dep) < 0) {
          generator.downloadPackageToLocal({
            dirName: getPackageName(dep),
            packageName: dep,
            output: componentDir
          })
        }
      })

      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }
}
