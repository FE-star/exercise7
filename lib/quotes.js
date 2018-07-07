// 匹配所有引号
module.exports = function (str) {
  var reg = /"[^"]*"/g;
  return str.match(reg);
}