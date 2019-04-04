var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  var regex = /@@([\w\W]+?)@@/g;
	return md.replace(regex, '<blink>$1</blink>');
}