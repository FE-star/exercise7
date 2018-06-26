module.exports = function (str) {
  // TODO
  const regex = /\bx=(\d+)\b/;
  var a = str.match(regex)
  return a && a[1]
}