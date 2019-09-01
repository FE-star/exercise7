module.exports = function (str) {
  // TODO
  const res = str.match(/(?<=x\=)\d+/)
  return res ? res[0] : res
}