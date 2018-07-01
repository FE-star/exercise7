module.exports = function (str) {
  let arr =/x=\d+/.exec(str);
  let result = arr ? arr[0].split('=')[1] : null;
  return result;
}