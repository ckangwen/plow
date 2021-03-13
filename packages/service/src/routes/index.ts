import { Router } from 'express'
import viewRouter from './view'
import routeRouter from './route'
import interfaceRoute from './interface'
import templateRoute from './template'
const router = Router()

router.use('/', viewRouter)
router.use('/route', routeRouter)
router.use('/interface', interfaceRoute)
router.use('/template', templateRoute)

export default router
