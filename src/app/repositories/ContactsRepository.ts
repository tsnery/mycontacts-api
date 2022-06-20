import {v4} from 'uuid'
import {TContacts} from './types'

let contacts: TContacts[] = [
  {
    id: v4(),
    name: 'Tainan',
    email: 'tainan@email.com',
    phone: '91984417318',
    category: v4(),
  },
  {
    id: v4(),
    name: 'Nick',
    email: 'nick@email.com',
    phone: '91984417318',
    category: v4(),
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

  delete(id: string): Promise<boolean> {
    return new Promise(resolve => {
      contacts = contacts.filter(contact => contact.id !== id)
      resolve(true)
    })
  }
}

export default new ContactsRepository()
