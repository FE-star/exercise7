module.exports = function (str) {
  let reg = /^(0x[a-fA-F0-9]{2}\s*){8}$/g
  return reg.test(str)
}