module.exports = function (str) {
  // TODO
  let reg = /(?:^|\s)x=(\d+)(?:$|\s)/.exec(str)
  return reg ? reg[1] : null
}