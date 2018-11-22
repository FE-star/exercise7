var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)

  // TODO
  return md.replace(/@@(.*?)@@/g, function () {
    return `<blink>${arguments[1]}</blink>`;
  })
}