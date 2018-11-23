var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
 	const reg = /(@@([a-zA-z0-9<>/]*\s?)+@@)+/g
 	return md.replace(reg,'<blink>$2</blink>')
  // TODO
  // return null
}