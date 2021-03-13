import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import BaseRouter from './routes'
import path from 'path'
import ejs from 'ejs'

class Service {
  run () {
    const app = express()
    this.loadPlugins(app)
    const port = Number(process.env.PORT || 3000)
    app.listen(port, () => {
      console.log('Express server started on port: ' + port)
    })
  }

  loadPlugins (app) {
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    // Show routes called in console during development
    if (process.env.NODE_ENV !== 'production') {
      app.use(morgan('dev'))
    }

    if (process.env.NODE_ENV === 'production') {
      app.use(helmet())
    }

    app.use('/', BaseRouter)

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      return res.status(500).json({
        error: err.message
      })
    })

    const viewsDir = path.join(__dirname, './views')

    app.set('views', viewsDir)
    app.engine('html', (ejs as any).__express)
    app.set('view engine', 'html')

    app.use(express.static(path.join(__dirname, '../public')))
  }
}

export default new Service()
