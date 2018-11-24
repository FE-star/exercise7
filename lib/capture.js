module.exports = function (str) {
  // TODO
  const reuslt =  str.match(/(?:^|\s+)x=(\d+)/);
  return reuslt ? reuslt[1] : null;
}