module.exports = function (str) {
  // TODO 使用非贪婪模式
  return str.match(/"[\w\W]*?"/g)
}