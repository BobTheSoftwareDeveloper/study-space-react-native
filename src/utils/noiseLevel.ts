export type NoiseLevelOptions = 'acceptable' | 'unacceptable'

export const getNoiseLevelAcceptance = (noiseLevel: number): NoiseLevelOptions => {
  if (noiseLevel <= 70) {
    return 'acceptable'
  }
  return 'unacceptable'
}
