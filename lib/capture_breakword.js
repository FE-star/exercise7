module.exports = function (str) {
  var res = str.match(/(?:^x|\sx)=(\d+)(?:$|\s)/)
  return res ? res[1] : null
}