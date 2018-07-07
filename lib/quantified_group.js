// 匹配8位 hex 代码，以'0x'开头，后面跟着两个字符可以是大写'A-F'，小写'a-f'，或者任意数字
module.exports = function (str) {
  var reg = /^(0x[A-Za-z0-9]+\s*){8}$/;
  return reg.test(str);
}