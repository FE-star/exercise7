module.exports = function (str) {
  // TODO
  var result = str.match(/(\s|^)x=(\d+)(\s|$)/);

  return result && result[2];
}