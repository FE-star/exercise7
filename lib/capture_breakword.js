module.exports = function (str) {
  // TODO

  let reg = /\bx=(\d+)\b/
  console.log(reg.exec(str))
  return reg.exec(str) ? reg.exec(str)[1] : null
}