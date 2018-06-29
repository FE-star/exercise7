module.exports = function (str) {
  const reg = /\bx=(\d+)\b/
  return reg.exec(str) ? reg.exec(str)[1] : null
}
