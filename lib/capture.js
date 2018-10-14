module.exports = function (str) {
  // TODO
  var regex = /x=(\d+)/
  var matches = str.match(regex)
  return matches ? matches[1] : null
}