module.exports = function (str) {
  // TODO
  const reg = /\".*?\"/g;
  return str.match(reg);
}