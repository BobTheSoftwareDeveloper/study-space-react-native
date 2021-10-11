export interface StudySpaceType {
  name: string
  description: string
  images: Array<string>
  occupancyLevel: number
  maxOccupancyLevel: number
  noiseLevel: number
  history: Array<Record<string, unknown>>
  location: {
    latitude: number
    longitude: number
  }
  _id: string
}

export interface UserType {
  uid: string
  name: string
  favouriteStudySpaces: Array<StudySpaceType>
}
