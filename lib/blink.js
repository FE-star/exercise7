var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  
  return md.replace(/(\@\@)(.*?)(\@\@)/g, (match, $1, $2, $3) => {
    return `<blink>${$2}</blink>`;
  })
}