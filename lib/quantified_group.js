module.exports = function (str) {
  // TODO
  return /^(0x[A-Fa-f\d]{2}\s+){8}$/g.test(str)
}