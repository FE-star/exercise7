module.exports = function (str) {
  // TODO
  return /^((0x[a-fA-F\d]{2})\s+){8}$/.test(str)
}