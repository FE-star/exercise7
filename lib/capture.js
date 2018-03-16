module.exports = function (str) {
  let reg = str.match(/(?:x=)(\d+)/)
  return reg && reg[1] ? reg[1] : reg;
}