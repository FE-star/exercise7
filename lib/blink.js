var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  const reg = /(@@)([^@@]+)(@@)/g
  return md.replace(reg, "<blink>$2</blink>")
}