module.exports = function (str) {
  let reg = str.match(/(?:\bx\b=)(\d+\b)/)
  return reg && reg[1] ? reg[1] : reg
}