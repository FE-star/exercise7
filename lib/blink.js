var marked = require('marked')

module.exports = function (str) {
  var md = marked(str);
  console.log(md);
  return md.replace(/@@([^@@]+)@@/g,'<blink>$1</blink>');
}