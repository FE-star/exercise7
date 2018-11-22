module.exports = function (str) {
  // TODO
  const result = str.match(/(?:(?:\bx)|(?:\w+[^x]))\=(\d+)\b/);
  return result && result[1];
}