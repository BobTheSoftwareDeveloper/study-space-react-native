import 'dotenv/config'

interface ConfigProps {
  config: {
    [key: string]: string
  }
}

export default ({ config }: ConfigProps) => ({
  ...config,
  extra: {
    API_URL: process.env.API_URL,
  },
})
