import { Router } from 'express'
import routeController from '../controllers/router.controller'

const router = Router()

router.post('/list', routeController.list)
router.post('/add', routeController.add)

export default router
