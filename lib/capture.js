module.exports = function (str) {
  const reg = /x=\d+/
  const result = reg.exec(str)
  if (!result) return result
  return result[0].match(/\d+/)[0]
}