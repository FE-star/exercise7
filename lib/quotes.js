module.exports = function (str) {
  // TODO
  let res = /\".*?\"/g;
  return str.match(res);
}