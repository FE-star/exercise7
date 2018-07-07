var marked = require('marked')

// 将'@@...@@'markdown语法变成'<blink>...</blink>'
module.exports = function (str) {
  var md = marked(str)
  var reg = /@@([^@@]*)@@/g;
  return md.replace(reg, '<blink>$1</blink>');
}