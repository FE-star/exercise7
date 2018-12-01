module.exports = function (str) {
  // TODO
  var result=str.match(/\d+/);
  return result?result[0]:null;
}
