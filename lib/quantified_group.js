module.exports = function (str) {
  // TODO
  var reg = /^(0x[\da-f]{2}[\b\s]+){8}$/ig
  return reg.test(str)
}