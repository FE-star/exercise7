var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  console.log(md);
  md = md.replace(/@@(\S+)@@/g,"<blink>$1</blink>")
  // TODO
  return md
}