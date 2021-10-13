import React from 'react'
import { getAllStudySpace as getAllStudySpaceModel } from '../models/studySpace'
import { StudySpaceType } from '../types/apiReponse'

const getAllStudySpace = async (): Promise<StudySpaceType[]> => {
  const data = await getAllStudySpaceModel()
  return data
}

const filterByStudySpaceName = (data: StudySpaceType[], searchTerm: string): StudySpaceType[] =>
  data.filter((obj) => {
    if (obj.name.toLowerCase().trim().indexOf(searchTerm.toLowerCase().trim()) > -1) {
      // Matches
      return true
    }
    return false
  })

const handleSearchTerm = (
  searchTerm: string,
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
  originalStudySpaces: StudySpaceType[],
  setStudySpaces: React.Dispatch<React.SetStateAction<StudySpaceType[]>>
): void => {
  setSearchTerm(searchTerm)
  setStudySpaces(() => filterByStudySpaceName(originalStudySpaces, searchTerm))
}

export { getAllStudySpace, filterByStudySpaceName, handleSearchTerm }
