module.exports = function (str) {
  // TODO

  var reg = /(0x)[A-Fa-f0-9]{2}\s*/g;
  return str.match(reg).length == 8
}