module.exports = function (str) {
  var regex1 = /^(0x[a-fA-F\d]{2}\s*){8}$/g;
  return str.match(regex1);
}
