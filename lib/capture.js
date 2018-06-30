module.exports = function (str) {
  let reg = /x=(\d+)/
  let result = str.match(reg)
  return result !== null ? result[1] : result
}