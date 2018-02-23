module.exports = function (str) {
  // TODO
  var reg = /(0x[a-zA-Z0-9][a-zA-Z0-9])[\n\t\s]/g
  var result = str.match(reg)
  return result && result.length === 8
}