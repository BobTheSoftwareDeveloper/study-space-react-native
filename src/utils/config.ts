import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
})

const config = {
  API_URL: process.env.API_URL,
}

export { config }
