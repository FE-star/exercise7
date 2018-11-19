var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  console.log(md)
  let reg=/@@(\S+)@@/g
  return md.replace(reg,'<blink>$1</blink>')
}