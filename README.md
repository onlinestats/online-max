# online-max
Find maximum processing values one by one (online algorithm)

## Usage

```
const Max = require('online-max')
const max = Max()

;[1,2,3,4,5].forEach(v => { max(v) })

console.log(max()) // -> 5

```
