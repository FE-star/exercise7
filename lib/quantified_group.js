module.exports = function (str) {
  // TODO
  var obj = /^(0x[A-Fa-f0-9]{2}\s+){8}$/.exec(str)
  return obj
}