module.exports = function (str) {
  // TODO
  var reg = /\b"."\b/
  var match = reg.exec(str)
  return match
}
