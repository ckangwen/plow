import { Request, Response } from 'express'

class IndexController {
  public index (req: Request, res: Response): void {
    res.render('index')
  }
}

const indexController = new IndexController()

export default indexController
