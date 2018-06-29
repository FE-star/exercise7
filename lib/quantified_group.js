module.exports = function (str) {
  const reg = /^(0x[A-Fa-f0-9]{2}\s+){8}$/
  return reg.exec(str) ? reg.exec(str)[1] : null
}
