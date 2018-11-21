module.exports = function (str) {
  // TODO
  let reg = /("[\w\s]*")/g;
  let res = str.match(reg);
  return res;
}