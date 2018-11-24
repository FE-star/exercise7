module.exports = function (str) {
  // TODO
  const reg = /(?:(?:\bx)|(?:\w+[^x]))\=(\d+)\b/;
  const result = str.match(reg);
  return result && result[1];
}