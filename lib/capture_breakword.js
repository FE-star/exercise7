module.exports = function (str) {
  // TODO
  var result = str.match(/((^x\1)|(\sx))\=(\d+)\b/);
  return result && result[4]
}