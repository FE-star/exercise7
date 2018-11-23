module.exports = function (str) {
  // TODO
  let arr = /(?<=\bx=)\d+\b/.exec(str)
  return arr ? arr[0] : null
}