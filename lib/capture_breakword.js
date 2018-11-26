module.exports = function (str) {
  // TODO
  const reg = /\bx=(\d+)\b/;
  const ret = reg.exec(str);

  return ret && String(ret[1]);
}