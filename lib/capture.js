module.exports = function (str) {
  const res = /x=(\d+)/.exec(str)
  return res ? res[1] : res
}