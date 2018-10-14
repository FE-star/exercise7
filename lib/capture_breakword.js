module.exports = function (str) {
  // TODO
  var regex = /\bx=(\d+)\b/
  var matches = str.match(regex)
  return matches ? matches[1] : null
}