module.exports = function (str) {
  var reg = /(^|\s)x=(\d+)($|\s)/;
  var res = reg.exec(str);
  // console.log(res);
  if (!res) {
    return res;
  }
  return res[2];
}
