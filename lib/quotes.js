module.exports = function (str) {
  // TODO
  var reg = /"[^"]*"/gi
  var match = str.match(reg)
  return match
}
