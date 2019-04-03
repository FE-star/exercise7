module.exports = function (str) {
  return /^(?:\s*0x[A-Fa-f0-9]{2}\s*){8}$/.test(str)
}