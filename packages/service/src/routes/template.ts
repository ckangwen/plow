import { Router } from 'express'
import controller from '../controllers/template.controller'

const router = Router()

router.post('/list', controller.list)
router.post('/downloadPackage', controller.downloadPackage)
router.post('/downloadTemplate', controller.downloadTemplate)

export default router
