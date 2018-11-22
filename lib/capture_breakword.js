module.exports = function (str) {
  // TODO
  let result = /\bx=(\d+)\b/.exec(str);
  return result && result[1];
}
