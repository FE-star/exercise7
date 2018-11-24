module.exports = function (str) {
  // TODO
  const res = str.match(/\=(\d+)/);
  return res ? res[1] : null;
}