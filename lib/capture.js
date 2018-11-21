module.exports = function (str) {
  var res = str.match(/x=(\d+)/)
  return res?res[1]:null
}