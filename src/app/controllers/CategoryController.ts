import {Request, Response} from 'express'
import CategoryRepository from '../repositories/CategoryRepository'

class CategoryController {
  async index(request: Request, response: Response) {
    const categories = await CategoryRepository.findAll()

    response.json(categories)
  }

  async store(request: Request<{}, {}, {name: string}>, response: Response) {
    const {name} = request.body

    if (!name) {
      return response.status(400).json({error: 'Name is required!'})
    }

    const category = await CategoryRepository.create({name})

    response.json(category)
  }
}

export default new CategoryController()
