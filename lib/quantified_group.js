module.exports = function (str) {
  const reg = /^(0x[A-Fa-f0-9]{2}\s+\n*){8}$/
  return reg.test(str)
}