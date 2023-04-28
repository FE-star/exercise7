var { marked } = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO 需要使用非贪婪模式,使用$[1-9]来代指匹配到的值
  return md.replace(/@@([\w\W]+?)@@/g, `<blink>$1</blink>`)
}