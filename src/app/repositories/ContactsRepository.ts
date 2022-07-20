import {v4} from 'uuid'
import db from '../../database'

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
  async findAll(orderBy: 'ASC' | 'DESC' = 'ASC'): Promise<TContacts[]> {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'

    const rows: TContacts[] = await db.query(
      `SELECT * FROM contacts ORDER BY name ${direction}`,
    )

    return rows
  }

  async findById(id: string): Promise<TContacts> {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id])

    return row
  }

  async findByEmail(email: string): Promise<TContacts> {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [
      email,
    ])

    return row
  }

  async delete(id: string): Promise<boolean> {
    await db.query('DELETE FROM contacts WHERE id = $1', [id])

    return true
  }

  async create({email, phone, name, category_id}: Omit<TContacts, 'id'>) {
    const [row] = await db.query(
      `INSERT INTO contacts(
      name,
      email,
      phone,
      category_id
    ) VALUES($1, $2, $3, $4) RETURNING *`,
      [name, email, phone, category_id],
    )

    return row
  }

  async update(
    id: string,
    {email, phone, name, category_id}: Omit<TContacts, 'id'>,
  ) {
    const [row] = await db.query(
      `
      UPDATE contacts
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `,
      [name, email, phone, category_id, id],
    )

    return row
  }
}

export default new ContactsRepository()
