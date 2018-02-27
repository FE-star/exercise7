var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  return md.replace(/@@([^@]*)@@/gi, '<blink>$1</blink>');
}