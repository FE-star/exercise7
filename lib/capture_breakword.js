module.exports = function (str) {
  let reg = /\bx=(\d+)\b/
  let result = str.match(reg)
  return result !== null ? result[1] : result
}