module.exports = function (str) {
  // TODO
  return str.match(/(('|").*?\2)/g);
}