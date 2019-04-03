module.exports = function (str) {
  // TODO
  return /^(0x[A-Fa-f0-9]{2}\s+){8}$/g.test(str)
}