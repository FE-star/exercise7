module.exports = function (str) {
  // TODO
  var result = /(\d+)\b/.exec(str) || []
  return result[1]
}