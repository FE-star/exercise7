module.exports = function (str) {
  // TODO
  var reg = /"[^"]*"/gi
  // var match = reg.exec(str)
  var match = str.match(reg)
  return match
}
