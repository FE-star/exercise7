module.exports = function (str) {
  // TODO
  let result = str.match(/\d+/)
  return result && result[0]
}