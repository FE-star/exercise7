module.exports = function(str) {
  // TODO
  var m = /(\d+)/.test(str);
  return m?RegExp.$1:null
};
