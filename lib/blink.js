var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  md = md.replace(/@@(.*?)@@/g,'<blink>$1</blink>')
  return md
}