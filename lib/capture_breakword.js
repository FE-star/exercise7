module.exports = function (str) {
  const res = /(?:\W+x|^x)=(\d+)(?!\w)/.exec(str)
  return res ? res[1] : res
}