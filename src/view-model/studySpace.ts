import { getAllStudySpace as getAllStudySpaceModel } from '../models/studySpace'
import { StudySpaceType } from '../types/apiReponse'

const getAllStudySpace = async (): Promise<StudySpaceType[]> => {
  const data = await getAllStudySpaceModel()
  return data
}

export { getAllStudySpace }
