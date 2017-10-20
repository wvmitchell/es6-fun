import { palindromeChecker, anagramChecker } from './index'

describe('es6 fun times!', () => {
  describe('palindromeChecker', () => {
    it('should return true for an empty string', () => {
      expect(palindromeChecker('')).toBe(true)
    })
  
    it('should return true for a one char string', () => {
      expect(palindromeChecker('a')).toBe(true)
    })
  
    it('should return false when not a palindrome', () => {
      expect(palindromeChecker('ab')).toBe(false)
    })
  
    it('should return true when a valid palindrome', () => {
      expect(palindromeChecker('racecar')).toBe(true)
    })
  
    it('should ignore case', () => {
      expect(palindromeChecker('Racecar')).toBe(true)
    })
  
    it('should ignore spaces', () => {
      expect(palindromeChecker('Race car')).toBe(true)
    })
  })

  describe('anagramChecker', () => {
    it('should return true for two empty strings', () => {
      expect(anagramChecker('', '')).toBe(true)
    })

    it('should return true for two one char identical strings', () => {
      expect(anagramChecker('a', 'a')).toBe(true)
    })

    it('should return false for a char and a blank', () => { 
      expect(anagramChecker('a', '')).toBe(false)
    })

    it('should return true for two anagrams', () => {
      expect(anagramChecker('race', 'care')).toBe(true)
    })

    it('should ignore case', () => {
      expect(anagramChecker('Race', 'care')).toBe(true)
    })

    it('should ignore spaces', () => {
      expect(anagramChecker('Race', 'c are')).toBe(true)
    })
  })
})
