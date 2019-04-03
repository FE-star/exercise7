var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  md= md.replace(/@@(.*?)@@/g,"<blink>$1</blink>")
  return md
}