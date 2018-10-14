var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  var regex = /@@(.*?)@@/g
  return md.replace(regex, '<blink>$1</blink>')
}