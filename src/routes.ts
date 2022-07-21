import {Router} from 'express'
import ContactController from './app/controllers/ContactController'
import CategoryController from './app/controllers/CategoryController'

const router = Router()

router.get('/contacts', ContactController.index)
router.get('/contacts/:id', ContactController.show)
router.delete('/contacts/:id', ContactController.delete)
router.put('/contacts/:id', ContactController.update)
router.post('/contacts', ContactController.store)

router.get('/categories', CategoryController.index)
router.post('/categories', CategoryController.store)

export {router}
