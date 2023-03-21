require('jsdom-global')()
import { calculate } from './calculator.js'

test('Calculate interest', () => {
  expect(calculate(1000, 6)).toBe(25)
  expect(calculate(1000, 12)).toBe(40)
  expect(calculate(1000, 18)).toBe(60)
})

