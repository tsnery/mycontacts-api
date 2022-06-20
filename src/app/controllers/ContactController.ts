import {Request, Response} from 'express'
import ContactsRepository from '../repositories/ContactsRepository'

class ContactController {
  async index(request: Request, response: Response) {
    const contacts = await ContactsRepository.findAll()

    return response.json(contacts)
  }
  async show(request: Request, response: Response) {
    const {id} = request.params
    const contacts = await ContactsRepository.findById(id)
    if (!contacts) {
      return response.json({error: 'Contact not found'})
    }
    response.json(contacts)
  }
  store() {}
  create() {}
  async delete(request: Request, response: Response) {
    const {id} = request.params
    const contact = await ContactsRepository.findById(id)
    if (!contact) {
      return response.json({message: 'Contact not found!'})
    }

    await ContactsRepository.delete(id)
    response.sendStatus(204)
  }
}

export default new ContactController()
