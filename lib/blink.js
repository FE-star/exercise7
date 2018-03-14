var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  var reg = /@@(\S*)@@/g
  var reg = /@@(.*?)@@/g
  return md.replace(reg, '<blink>$1</blink>')
}