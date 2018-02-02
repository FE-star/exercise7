module.exports = function (str) {
  // TODO
  var reg = /^(\b0x[\da-z]{2}[\b|\s]+){8}$/gi
  return reg.test(str)
}
