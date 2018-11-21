module.exports = function (str) {
  var res = str.match(/\"([^"]*)\"/g)
  return res ? Array.from(res) : null
}