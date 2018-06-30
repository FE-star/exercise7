module.exports = function (str) {
  // TODO
  return /^(0x[A-Fa-f0-9]{2}(\s|\n)*){8}$/.test(str);
}