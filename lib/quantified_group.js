module.exports = function (str) {
  // TODO
  return /^(0x[0-9A-F][0-9A-F]\s*){8}$/i.test(str);
}