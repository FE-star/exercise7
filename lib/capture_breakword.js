module.exports = function (str) {
  let res = str.match(/\bx=(?=(\d+)\b)/)
  return res && res[1]
}