module.exports = function (str) {
  // TODO
  return /^(0x[0-9a-zA-Z]{2}(\s+|\\)){8}(\n?)$/.test(str)
}