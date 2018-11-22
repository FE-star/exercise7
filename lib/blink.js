var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  return md
    .replace(/\*(\w+)\*/g, '<em>$1</em>')
    .replace(/\*\*(\w+)\*\*/g, '<strong>$1</strong>')
    .replace(/__(\w+)__/g, '<strong>$1</strong>')
    .replace(/@@([^@]+)@@/g, '<blink>$1</blink>')
}