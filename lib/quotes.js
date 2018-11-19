module.exports = function (str) {
  // TODO
  var reg = /("[\w\s]*")/g
  return str.match(reg)
}