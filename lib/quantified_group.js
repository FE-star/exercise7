module.exports = function (str) {
  // TODO
  return /^(0x\w{2}[\s\n]+){8}$/.test(str)
}