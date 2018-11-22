module.exports = function (str) {
  // TODO
  let arr  = str.match(/x=(\d+)/);
  return arr? arr[1]:null;
}