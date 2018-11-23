module.exports = function (str) {
  // TODO
  let arr = /(?<=x=)\d+/.exec(str)
  return arr ? arr[0] : null
}