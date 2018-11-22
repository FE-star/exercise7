module.exports = function (str) {
  // TODO
  let arr  = str.match(/(?:^x|\sx)=(\d+)(?:\s|$)/);
  return arr? arr[1]:null;
}