module.exports = function (str) {
  // TODO
  const result = str.match(/\=(\d+)/);
  return result && result[1];
}