var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  let pattern = /(@@)([^@{2}]*)(@@)/g;

  while(pattern.exec(md)){
    md = md.replace(pattern, "<blink>$2</blink>")
  }

  return md || null
}