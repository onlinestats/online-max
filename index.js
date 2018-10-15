module.exports = function () {
  var value = NaN
  var n = 0

  var max = function max (x) {
    if (!isNaN(x)) {
      if (typeof x !== 'number') {
        x = parseFloat(x)
      }
      if ((x > value) || (isNaN(value))) {
        value = x
      }
    } else if (Array.isArray(x)) {
      x.forEach(el => max(el))
    }

    return value
  }

  max.fit = function (x) {
    max(x)
  }

  Object.defineProperty(max, 'value', {
    get: function () {
      return value
    }
  })

  Object.defineProperty(max, 'n', {
    get: function () {
      return n
    }
  })

  return max
}
