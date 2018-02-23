module.exports = function (str) {
  // TODO
  var reg = /(?:x=)(\d+)\b/
  var result = str.match(reg);
  return result && result[1] ? result[1] : result
}