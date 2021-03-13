import { resolve } from 'path'
import { createTemplateGenerator } from '../../../src/libs/generator/template-generator'
const basepath = resolve(__dirname, '../../mock/view')
const componentsPath = resolve(__dirname, '../../mock/components')
const templatePath = resolve(__dirname, '../../mock/templates')

describe('Template Test Unit', () => {
  const generator = createTemplateGenerator(basepath)

  it('downloadPackageToLocal', () => {
    generator.downloadPackageToLocal({
      dirName: 'abc',
      packageName: '@ckangwen/crud',
      output: componentsPath
    })
  })

  it('downloadTemplateToLocal', () => {
    generator.downloadTemplateToLocal({
      output: resolve(templatePath, './test.vue'),
      url: 'https://gitee.com/ckw1999/component-center/raw/master/template/crud.vue',
      name: 'BasicTableLayout'
    })
  })
})
