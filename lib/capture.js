module.exports = function (str) {
  // TODO
  let res = /x\=(\d+)/;
  let a = str.match(res);
  return a && a[1];
}