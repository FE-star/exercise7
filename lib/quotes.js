module.exports = function (str) {
  var res = str.match(/("[\w\s]*")/g);
  // console.log(res);
  return res;
}
