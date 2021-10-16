import axios, { AxiosRequestConfig } from 'axios'
import { config } from './config'
import { firebaseAuth } from './firebase'

const instance = axios.create({
  baseURL: config.API_URL,
})

instance.interceptors.request.use(
  async (requestConfig: AxiosRequestConfig) => {
    if (firebaseAuth.currentUser !== null) {
      const bearerToken = await firebaseAuth.currentUser.getIdToken()
      // @ts-ignore Next line
      requestConfig.headers.authorization = `Bearer ${bearerToken}`
    }
    return Promise.resolve(requestConfig)
  },
  (error) => Promise.reject(error)
)

export { instance as axiosInstance }
