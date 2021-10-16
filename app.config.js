// eslint-disable-next-line import/extensions
import appConfig from './app.json'
import 'dotenv/config'

export default {
  name: appConfig.expo.name,
  version: appConfig.expo.version,
  extra: {
    API_URL: process.env.API_URL,
  },
}
