var marked = require('marked')

module.exports = function(str) {
  var md = marked(str)
  return md.replace(/@@([\w\W]+?)@@/g, `<blink>$1</blink>`)
};

`*abc* @@def@@ __ghi__`.replace(/(?:(\*|@@|__)([\w\W]+?)\1)/g, (str, tag, val) => {
  var tagName = {
    '*': 'em',
    '@@': 'blink',
    '__': 'strong',
  }[tag];
  return `<${tagName}>${val}</${tagName}>`;
});
