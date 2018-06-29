module.exports = function (str) {
  const reg = /=(\d+)/
  return reg.exec(str) ? reg.exec(str)[1] : null
}
