import {v4} from 'uuid'
import {TContacts} from './types'

let contacts: TContacts[] = [
  {
    id: v4(),
    name: 'Tainan',
    email: 'tainan@email.com',
    phone: '91984417318',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Nick',
    email: 'nick@email.com',
    phone: '91984417318',
    category_id: v4(),
  },
]

class ContactsRepository {
  findAll(): Promise<TContacts[]> {
    return new Promise(resolve => resolve(contacts))
  }

  findById(id: string): Promise<TContacts> {
    return new Promise(resolve => {
      const contact = contacts.find(contact => contact.id === id)
      resolve(contact!)
    })
  }

  findByEmail(email: string): Promise<TContacts> {
    return new Promise(resolve => {
      const contact = contacts.find(contact => contact.email === email)
      resolve(contact!)
    })
  }

  delete(id: string): Promise<boolean> {
    return new Promise(resolve => {
      contacts = contacts.filter(contact => contact.id !== id)
      resolve(true)
    })
  }

  create({email, phone, name, category_id}: Omit<TContacts, 'id'>) {
    return new Promise(resolve => {
      const newContact = {id: v4(), email, phone, name, category_id}
      contacts.push(newContact)
      resolve(newContact)
    })
  }

  update(id: string, {email, phone, name, category_id}: Omit<TContacts, 'id'>) {
    return new Promise(resolve => {
      const updatedContact = {id, email, phone, name, category_id}
      contacts = contacts.map(contact =>
        contact.id === id ? updatedContact : contact,
      )
      resolve(updatedContact)
    })
  }
}

export default new ContactsRepository()
