var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  var reg = /@@(.*?)@@/g
  return md.replace(reg,'<blink>$1</blink>')
}
