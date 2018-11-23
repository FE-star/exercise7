var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  md = md.replace(/(@@)(.*?)(@@)/g, function(...arg) {
    return '<blink>'+ arg[2]+'</blink>'
  })
  console.log(111, md);
  // TODO
  return md
}