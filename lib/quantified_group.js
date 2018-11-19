module.exports = function (str) {
  // TODO
  var m = /^(0x[a-f\d]{2}[\b\s]+){8}$/ig.test(str);
  return m
}