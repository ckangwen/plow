import axios from 'axios'
import { createInterfaceGenerator } from '../libs/generator/interface-generator'
import { ViewRootDevPath } from '../shared/index'
import { resolve } from 'path'
import { ApiTemplateRenderData } from '../types/index'
const generator = createInterfaceGenerator(resolve(ViewRootDevPath, './src/api'))

export class InterfaceService {
  async getInterfaceDefinition (id: string, cookie: string) {
    const res = await axios.get('http://yapi.yunyuer.com/api/interface/get', {
      headers: {
        Cookie: cookie
      },
      params: {
        id
      }
    })
    return res.data
  }

  saveInterface (name: string, interfaces: ApiTemplateRenderData[]) {
    try {
      generator.render(name, interfaces)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
}
