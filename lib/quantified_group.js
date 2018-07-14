module.exports = function (str) {
  // TODO
  let reg = /^(0x[A-Fa-f0-9]{2}[\s]+){8}$/
  let result1 = str.match(reg) ? str.match(reg)[0] : null

  return result1
}