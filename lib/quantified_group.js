module.exports = function (str) {
  var reg = /^(0x[a-fA-f\d]{2}\s+){8}$/.test(str);
  // console.log(reg);
  return reg
}
