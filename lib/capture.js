module.exports = function (str) {
  // TODO
  const result = str.match(/x=([1-9]+)/);
  return result !== null ? result[1] : result;
}
