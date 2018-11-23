module.exports = function (str) {
  // TODO
  let res = /(^|\s)x=(\d+)(?=($|\s))/;
  let a = str.match(res);
  return a && a[2];
}