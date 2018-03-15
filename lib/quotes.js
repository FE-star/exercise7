module.exports = function (str) {
  let matchs = str.match(/\".*?\"/g);
  return matchs;
}
