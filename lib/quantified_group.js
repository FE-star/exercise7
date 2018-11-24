module.exports = function (str) {
  return /^(0x[\da-fA-F]{2}\s*){8}$/g.test(str)
}