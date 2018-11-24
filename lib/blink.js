var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  const reg = /(\@\@)(.*?)(\@\@)/g
  return md.replace(reg, (...args) => {
    return `<blink>${args[2] || null}</blink>`;
  })
}