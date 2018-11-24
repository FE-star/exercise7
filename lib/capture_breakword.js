module.exports = function (str) {
  // TODO
  let regexp = /\bx=(\d+)\b/;
  let result = regexp.exec(str);
  return result && result[1];
}