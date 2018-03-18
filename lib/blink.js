var marked = require('marked')

module.exports = function(str) {
  // 依赖 marked 模块的写法
  // var md = marked(str)
  // return md.replace(/@@([\w\W]+?)@@/g, `<blink>$1</blink>`);

  // 不依赖 marked 模块的写法
  let regex = /(?:([\*@_]+)([\w\W]+?)\1)/g;
  while (regex.test(str)) {
    str = str.replace(regex, (str, tag, val) => {
      var tagName = {
        '*': 'em',
        '**': 'strong',
        '@@': 'blink',
        '__': 'strong',
      }[tag];
      return `<${tagName}>${val}</${tagName}>`;
    });
  }
  return `<p>${str}</p>`;
};