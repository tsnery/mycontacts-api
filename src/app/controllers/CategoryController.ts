import {Request, Response} from 'express'

class CategoryController {
  index(request: Request, response: Response) {
    response.json({ok: 'ok'})
  }

  store(request: Request, response: Response) {
    response.json({ok: true})
  }
}

export default new CategoryController()
