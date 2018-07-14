module.exports = function (str) {
  // TODO, 分析一下String.prototype.match和RegExp.prototype.exec，加g与不加g
  return str.match(/".*?"/g);
};
