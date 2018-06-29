module.exports = function (str) {
  // TODO
  var obj = str.match(/x=([0-9]+)/)
  return obj && obj[1]
}