var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  let reg= /(@@)(\S*)(@@)/g
  return md.replace(reg,'<blink>$2</blink>')
}