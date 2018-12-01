module.exports = function (str) {
  // TODO
  var regx=/\".*?\"/g;
  return str.match(regx);
}
