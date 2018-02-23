var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  var reg = /@@(.*?)@@/g
  var result = md.replace(reg,'<blink>$1</blink>');
  return result;
}