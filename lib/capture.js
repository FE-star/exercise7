module.exports = function (str) {
  let res = str.match(/x=(\d+)/)
  return res && res[1]
}