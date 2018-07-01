module.exports = function (str) {
  let arr =/\bx=\d+\b/.exec(str);
  // let result = arr ? arr[0].split('=')[1] : null;
  return arr ? arr[0].split('=')[1] : null;
}