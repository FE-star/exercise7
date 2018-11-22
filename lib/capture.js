module.exports = function (str) {
  // TODO
  let result = /x=(\d+)/.exec(str);
  return result && result[1];
}