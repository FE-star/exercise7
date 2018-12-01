module.exports = function (str) {
  // TODO
  var regx=/^(0x[0-9a-fA-F]{2}\s*){8}$/;
  return regx.test(str);
}
