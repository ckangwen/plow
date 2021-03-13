import { Router } from 'express'
import controller from '../controllers/view.controller'

const router = Router()

router.get('', controller.index)

export default router
