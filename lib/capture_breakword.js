module.exports = function (str) {
  // TODO
  const reuslt =  str.match(/(?:^|\s+)x=(\d+)(?:\s+|$)/);
  return reuslt ? reuslt[1] : null;
}