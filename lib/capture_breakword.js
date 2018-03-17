module.exports = function (str) {
  // TODO
  var reg = /\b(?:x=)(\d+)\b/
  var arr = str.match(reg)
  return arr && arr[1] ? arr[1] : arr
}