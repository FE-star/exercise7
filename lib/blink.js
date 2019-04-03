var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // 问号用来设置'非贪婪模式'
  return md.replace(/@@(.*?)@@/g, '<blink>$1</blink>')
}