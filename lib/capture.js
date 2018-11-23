module.exports = function (str) {
  // TODO
  let reg = /x=(\d+)/.exec(str)
  return reg ? reg[1] : null
}