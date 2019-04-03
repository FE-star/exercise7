module.exports = function (str) {
  // TODO
  var a = str.match(/\bx=\d+\b/);
  // console.log(a)
  return a ? a[0].replace(/\bx=/, '') : null;
}