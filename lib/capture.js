module.exports = function(str) {
  // TODO
  return str.match(/x=(\d+)/) ? RegExp.$1 : null;
};
