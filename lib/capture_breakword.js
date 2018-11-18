module.exports = function (str) {
  const reg = /(^|\s+)x=\d+(\s+|$)/
  const result = reg.exec(str)
  if (!result) return result
  return result[0].match(/\d+/g)
}