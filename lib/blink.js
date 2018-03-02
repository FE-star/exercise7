var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
var patt = /@@(.*?)@@/g;
 return md.replace(patt,'<blink>$1</blink>')
 /* return null*/
}