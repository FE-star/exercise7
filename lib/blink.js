var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  return md.replace(/@{2}(\S+)@{2}/g, "<blink>$1</blink>")
}