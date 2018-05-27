var test = require('tape')
var Max = require('./index')

var values = [1, 3, 5, NaN, 'Bob', '6', 4]

test('Simple test with NaN and Strings', (_) => {
  var max = Max()
  values.forEach(v => { max(v) })
  console.log(max())
  _.equal(max(), 6)
  _.end()
})

test('No numerical values', (_) => {
  var max = Max()
  max('WTF')
  var m = max()
  _.true(m !== m) // Fastes NaN check. Linter, shut the fuck up!
  _.end()
})

test('Only one value', (_) => {
  var max = Max()
  max(42)
  _.equal(max(), 42)
  _.end()
})
