module.exports = function (str) {
  // TODO
  var reg = /\bx=(\d+)\b/
  var match = reg.exec(str) || []
  return match[1]
}
