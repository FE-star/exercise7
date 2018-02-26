module.exports = function (str) {
  // TODO
  if (/(?:.{0,}\bx=)(\d+)(?:\b.{0,})/.test(str)) {
    return RegExp.$1;
  }
  return null;
}