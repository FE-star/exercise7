module.exports = function (str) {
  return /^(0x([a-zA-Z0-9]{2})(\s+)){8}$/.test(str)
}