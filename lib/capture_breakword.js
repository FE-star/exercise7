module.exports = function (str) {
  // TODO
  // \bx: 以x开头
  // [1-9]+: 一到多个正整数
  // ($|\s+): 以整数结尾或者后面有空格
  const result = str.match(/\bx=([1-9]+)($|\s+)/);
  return result !== null ? result[1] : result;
}
