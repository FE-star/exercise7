module.exports = function (str) {
  // TODO
  const res = /\bx=(\d+)\b/.exec(str);
  return res ? res[1] : null;
}