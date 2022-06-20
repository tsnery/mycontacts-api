import {Router} from 'express'
import ContactController from './app/controllers/ContactController'

const router = Router()

router.get('/contacts', ContactController.index)
router.get('/contacts/:id', ContactController.show)
router.delete('/contacts/:id', ContactController.delete)

export {router}
