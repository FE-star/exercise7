module.exports = function (str) {
  // TODO
  var reg = /(?:x=)(\d+)/
  var arr = str.match(reg)
  return arr && arr[1] ? arr[1] : arr;
}