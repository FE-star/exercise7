module.exports = function (str) {
  // TODO
  const matcher = /x=(\d+)/.exec(str);
  return matcher ? matcher[1] : null;
}