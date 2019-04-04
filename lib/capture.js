module.exports = function (str) {
  // TODO
  var res=str.match(/\bx=(\d+)\b/)
  return res&&res[1];
}