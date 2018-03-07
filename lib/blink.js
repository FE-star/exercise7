var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  var reg = new RegExp(/@@(.*?)@@+/, "g"); // 需要非贪婪匹配

  return md.replace(reg,"<blink>$1</blink>");
}