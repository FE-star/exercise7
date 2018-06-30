var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  let reg = /@@([^@@]+)@@/g
  let result = md.replace(reg, '<blink>$1</blink>')
  return result
}