const Max = require('.')
const max = Max()

// Direct call
const max1 = Max()
;[1,2,3,4,5].forEach(v => { max1(v) })
console.log(max1()) // -> 5

// Or via .fit() and .value getter
const max2 = Max()
;[1,2,3,4,5].forEach(v => { max2.fit(v) })
console.log(max2.value) // -> 5

// You can also pass arays to max
max2([3.2, 2, 4])
// Keep in mind - we already declared max2, so we just update it
// Maximum is still 5
console.log(max2.value) // -> 5!

