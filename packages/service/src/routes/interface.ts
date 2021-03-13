import { Router } from 'express'
import controller from '../controllers/interface.controller'

const router = Router()

router.post('/get', controller.get)
router.post('/set', controller.set)

export default router
