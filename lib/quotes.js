module.exports = function (str) {
  const reg = /("[^"]*")/g
  return str.match(reg)
}
