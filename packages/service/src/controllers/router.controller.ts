import { Request, Response } from 'express'
import { RouteService } from '../service/route.service'
import { success, error } from '../libs/utils/response'

const service = new RouteService()

type AddParams = {
  path: string
  route: string
}

class RouteController {
  public list (req: Request, res: Response, next: Function): void {
    const list = service.list()
    res.json(success(list, '路由列表获取成功'))
  }

  public add (req: Request, res: Response, next: Function): void {
    const isSuccess = service.add(req.body)

    if (isSuccess) {
      res.json(success([]))
    } else {
      res.json(error([]))
    }
  }

  public refresh (req: Request, res: Response, next: Function) {
    const isSuccess = service.refresh()

    if (isSuccess) {
      res.json(success([]))
    } else {
      res.json(error([]))
    }
  }
}

const routeController = new RouteController()

export default routeController
