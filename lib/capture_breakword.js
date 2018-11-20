module.exports = function (str) {
  // TODO
  var result = str.match(/(^x=|\sx=)(\d+)(\s{1}|$)/)
  return result && result[2]
}