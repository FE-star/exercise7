module.exports = function (str) {
  var regex1 = /".*?"/g;
  return str.match(regex1);
}
