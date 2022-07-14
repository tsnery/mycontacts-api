import {Client} from 'pg'

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
})

client.connect()

const query = async (query: string) => {
  const {rows} = await client.query(query)

  return rows
}

export {query}
