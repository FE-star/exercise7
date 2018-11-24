module.exports = function (str) {
  var regex1 = /\bx=(\d+)\b/;
  return str.match(regex1)?str.match(regex1)[1]:null;
}
