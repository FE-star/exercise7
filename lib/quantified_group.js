module.exports = function (str) {
  // TODO
  return /^(0x[0-9a-fA-F]{2}\s+){8}$/.test(str);
}