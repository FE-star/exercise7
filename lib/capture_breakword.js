module.exports = function (str) {
  // TODO
  let reg = /\bx=([1-9]+)\b/
  return str.match(reg) ? str.match(reg)[1] : null
}