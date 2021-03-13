import { Request, Response } from 'express'
import { InterfaceService } from '../service/interface.service'
import { success, error } from '../shared/index'

const service = new InterfaceService()

class InterfaceController {
  public async get (req: Request, res: Response, next: Function) {
    const { id, cookie } = req.body as any
    const data = await service.getInterfaceDefinition(id, cookie)

    if (data) {
      res.json(success(data, 'Yapi接口定义获取成功'))
    } else {
      res.json(error([], 'Yapi接口定义获取失败'))
    }
  }

  public async set (req: Request, res: Response, next: Function) {
    const { interfaces, name } = req.body as any
    const data = await service.saveInterface(name, JSON.parse(interfaces))

    if (data) {
      res.json(success([], 'Yapi接口下载成功'))
    } else {
      res.json(error([], 'Yapi接口下载失败'))
    }
  }
}

const controller = new InterfaceController()

export default controller
