module.exports = function (str) {
  // TODO
  let m = /\bx=(\d+)\b/.test(str);
  return m ? RegExp.$1 : null;
}