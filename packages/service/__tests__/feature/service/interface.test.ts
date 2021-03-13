import { InterfaceService } from '../../../src/service/interface.service'

const service = new InterfaceService()
describe('Interface Service', () => {
  it('getInterfaceDefinition', () => {
    service.getInterfaceDefinition('12338', '_yapi_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEzMCwiaWF0IjoxNjE1MTg5NjE1LCJleHAiOjE2MTU3OTQ0MTV9.Nf6l4ZvG3Pkfo97pIrWMwgSq6rcKb0BEKrrmpzvA0FQ; _yapi_uid=130; xwtkey=fa9c6130b0c646379e4ca944cc0fc7ab; xwttid=57757')
      .then(res => {
        console.log(res)
      })
  })
})
