module.exports = function (str) {
  // TODO
  const reg = /\=(\d+)/;
  const result = str.match(reg);
  return result && result[1];
}