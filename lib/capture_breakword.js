module.exports = function (str) {
  // TODO
  var result = /\bx=(\d+)\b/.exec(str) || []
  return result[1]
}