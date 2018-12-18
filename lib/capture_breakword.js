module.exports = function (str) {
  // TODO
  let reg = str.match(/\bx=(\d+)\b/)
  return reg ? reg[1] : null
}