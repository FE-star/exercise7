module.exports = function (str) {
  // TODO
  // return str.match(/(^(0x[a-fA-F0-9]{2}\s*){8}$)/)
  return /(^(0x[a-fA-F0-9]{2}\s*){8}$)/.test(str)
}