module.exports = function (str) {
  // TODO
let reg = /^(0x[A-Fa-f\d]{2}\s*){8}$/
return str.match(reg) ? str.match(reg)[1] : null
}