var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  return md.replace(/@@([^@@]*)@@/g,(match, p1) => {
    return `<blink>${p1}</blink>`
  })
}