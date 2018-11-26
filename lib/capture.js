module.exports = function(str) {
  // TODO
  var res = str.match(/x=(\d+)/);
  return res ? res[1] : res;
};
