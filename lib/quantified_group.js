module.exports = function (str) {
  return /^(0x[\dA-F][\dA-F]\s*){8}$/i.test(str);
}