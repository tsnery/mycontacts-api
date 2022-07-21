import db from '../../database'
import {TCategory, TCreateCategoryProps} from './types'

class CategoryRepository {
  async findAll(): Promise<TCategory[]> {
    const rows = await db.query(`SELECT * FROM categories ORDER BY name`)

    return rows
  }

  async create({name}: TCreateCategoryProps): Promise<TCategory> {
    const [row] = await db.query(
      `INSERT INTO categories(name) VALUES($1) RETURNING *`,
      [name],
    )

    return row
  }
}

export default new CategoryRepository()
