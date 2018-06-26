module.exports = function (str) {
  // TODO
  const regex = /\".*?\"/g;
  return str.match(regex)
}