module.exports = function (str) {
  let res = /\bx=(\d+)\b/.exec(str)
  return res ? res[1] : null
}