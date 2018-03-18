module.exports = function (str) {
  var reg = /x=(\d+)/;
  var res = reg.exec(str);
  // console.log(res);
  if (!res) {
    return res;
  }
  return res[1];
}
