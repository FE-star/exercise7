var marked = require('marked')

module.exports = function (str) {
  var md = marked(str);
  var re = /@@(.*?)@@/g;
  return md.replace(re, '<blink>$1</blink>');
}
