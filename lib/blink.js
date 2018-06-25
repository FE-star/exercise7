var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  return md.replace(/@@([\w/<>]*)@@/g, (match, p1) => '<blink>' + p1 + '</blink>');
}