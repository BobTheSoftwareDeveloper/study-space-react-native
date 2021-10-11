import { describe, expect, it } from '@jest/globals'
import { getNoiseLevelAcceptance } from '../noiseLevel'

describe('noise level function test', () => {
  it('is acceptable noise level, 65', () => {
    const result = getNoiseLevelAcceptance(65)
    expect(result).toBe('acceptable')
  })

  it('is acceptable noise level, 70', () => {
    const result = getNoiseLevelAcceptance(70)
    expect(result).toBe('acceptable')
  })

  it('is unacceptable noise level, 71', () => {
    const result = getNoiseLevelAcceptance(71)
    expect(result).toBe('unacceptable')
  })

  it('is acceptable noise level, -1', () => {
    const result = getNoiseLevelAcceptance(-1)
    expect(result).toBe('acceptable')
  })
})
