module.exports = function (str) {
  // TODO

  const result = str.match(/(^|\s+)x\=(\d+)(\s+|$)/);
  return result && result[2];
}