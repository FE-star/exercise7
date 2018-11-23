module.exports = function(str) {
  // TODO
  return str.match(/(?<![a-z0-9])x=(\d+)(?![a-z0-9])/g) ? RegExp.$1 : null;
};
