module.exports = function (str) {
  // TODO  /\bx=(\d+)\b/
  const reg = /\bx=(\d+)\b/
  return reg.exec(str) ? reg.exec(str)[1]: null
}