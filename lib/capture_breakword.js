module.exports = function (str) {
  // TODO
  const res = str.match(/(?<=(\s|^)x\=)\d+((?=\s)|$)/)
  return res ? res[0] : res
}