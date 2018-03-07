module.exports = function (str) {
  // TODO
  var reg = new RegExp(/"[\w\s]*"/, "g");

  return str.match(reg);
}