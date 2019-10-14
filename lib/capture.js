module.exports = function (str) {
  let res = /x=(\d+)/.exec(str)
  return res ? res[1] : null
}