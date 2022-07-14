import {Client} from 'pg'

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
})

const initConnection = async () => {
  try {
    await client.connect()
  } catch (error) {
    console.log(error)
  }
}

initConnection()

const query = async (query: string, values?: any[]) => {
  const {rows} = await client.query(query, values)

  return rows
}

const db = {
  query,
}

export default db
