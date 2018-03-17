module.exports = function (str) {
  // TODO
  var reg = /^(0x([a-zA-Z0-9]{2})(\s+)){8}$/
  return reg.test(str)
}