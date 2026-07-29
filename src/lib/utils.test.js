import { describe, expect, it } from 'vitest'
import { cn } from './utils'

describe('cn', () => {
  it('une clases válidas ignorando valores falsy', () => {
    expect(cn('a', false, null, undefined, 'b', '', 'c')).toBe('a b c')
  })

  it('devuelve cadena vacía cuando no hay clases', () => {
    expect(cn()).toBe('')
  })
})
