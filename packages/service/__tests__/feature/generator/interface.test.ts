import { resolve } from 'path'
import { createInterfaceGenerator } from '../../../src/libs/generator/interface-generator'
import { ApiTemplateRenderData } from '../../../src/types/index'

const apiPath = resolve('../../mock')

describe('InterfaceGenerator', () => {
  const generator = createInterfaceGenerator(apiPath)
  it('render', () => {
    const apis: ApiTemplateRenderData[] = [
      {
        method: 'GET',
        functionName: 'testFunc',
        interface: '/test',
        desc: `
        * Hello
        * World
        `
      }
    ]
    generator.render('api', apis)
  })
})
