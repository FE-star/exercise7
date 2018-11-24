var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  var regRep = /@@([\w\W]+?)@@/g;
  return md.replace(regRep, '<blink>$1</blink>')
}