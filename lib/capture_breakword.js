module.exports = function(str) {
  // TODO
  var m = /\bx=(\d+)\b/.test(str);
  return m ? RegExp.$1 : null;
};
