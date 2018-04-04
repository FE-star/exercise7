module.exports = function (str) {
  // TODO
  return /\bx=(\d+)\b/.exec(str) ? /\bx=(\d+)\b/.exec(str)[1] : null
}