module.exports = function (str) {
  // TODO
  // \b 匹配一个零宽单词边界
  const matcher = /\bx=(\d+)\b/.exec(str);
  return matcher ? matcher[1] : null;
}