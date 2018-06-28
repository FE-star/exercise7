module.exports = function (str) {
  // TODO
  let pattern = /\bx=(\d+)\b/;
  let res = pattern.exec(str);
  return res && res[1];
}