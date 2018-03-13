var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  let regexp = /@@(\S*)@@/g;
  return md.replace(regexp,'<blink>$1</blink>');
}