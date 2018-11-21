module.exports = function (str) {
  // TODO
  let reg = /\d+/;
  let res = str.match(reg);
  return res && res[0];
}