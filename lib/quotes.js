module.exports = function (str) {
  // TODO
  let reg = /("[^"]*")/g
  return str.match(reg)
}