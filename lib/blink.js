var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  return md.replace(/@@(\S*)@@/g, '<blink>$1</blink>')
}