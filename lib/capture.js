module.exports = function (str) {
  // TODO
  var result = str.match(/\=(\d+)\b/)
  return result && result[1]
}