var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  var reg = /@@(.*?)@@/g;
  var res = md.replace(reg, '<blink>$1</blink>');
  return res;
}
