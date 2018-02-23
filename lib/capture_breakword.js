module.exports = function (str) {
  var reg = /\b(?:x=)(\d+)\b/
  var result = str.match(reg);
  return result && result[1] ? result[1] : result
}