module.exports = function () {
  var max = NaN
  return function (x) {
    var value
    if (!isNaN(x)) {
      value = (typeof x === 'number') ? x : parseFloat(x)
      if ((value > max) || (isNaN(max))) {
        max = value
      }
    }
    return max
  }
}
