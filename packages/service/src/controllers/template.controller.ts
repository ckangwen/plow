import { Request, Response } from 'express'
import { success, error } from '../libs/utils/response'
import { TemplateService } from '../service/template.service'
import { RouteService } from '../service/route.service'

const service = new TemplateService()
const routeService = new RouteService()

class TemplateController {
  list (req: Request, res: Response) {
    const list = service.list()
    res.json(success(list, '模板列表获取成功'))
  }

  downloadPackage (req: Request, res: Response) {
    const result = service.downloadPackage(req.body as any)
    res.json(result ? success([], '下载成功') : error([], '下载失败'))
  }

  downloadTemplate (req: Request, res: Response) {
    const result = service.downloadTemplate(req.body as any)
    // 因为先创建的路由配置，再生成的页面文件，所以会vue无法检测到该路由对应的视图文件(此时视图文件尚未创建)
    // 重新写入page_routes.js文件，触发项目的热更新
    routeService.refresh()
    res.json(result ? success([], '下载成功') : error([], '下载失败'))
  }
}

const controller = new TemplateController()

export default controller
