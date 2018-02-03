var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  var reg = /@@([^@]*)@@/gi
  var md = md.replace(reg, '<blink>$1</blink>')

  return md
}
