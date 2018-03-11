var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  let regexp = /@@(.*?)@@/g;
  return md.replace(regexp,'<blink>$1</blink>');
}