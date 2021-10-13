import { StudySpaceType } from '../types/apiReponse'
import { axiosInstance } from '../utils/axios'

const getAllStudySpace = async (): Promise<StudySpaceType[]> => {
  const data = (await axiosInstance.get('/study-space')).data
  return data
}

export { getAllStudySpace }
