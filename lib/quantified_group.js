module.exports = function (str) {
  // TODO
  var reg = new RegExp(/^(0x[A-F, a-f, 0-9]{2}\s*){8}$/, "g");

  return reg.test(str);
}