module.exports = function(str) {
  // TODO
  var res = str.match(/(^|\s)x=(\d+)(\s|$)/);
  return res ? res[2] : res;
};
