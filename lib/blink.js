var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO

  const l = md.replace(/@@[^@@]*@@/g, function(match) {
    const s = match.split('@@')[1]; // 找出中间内容
    return `<blink>${s}</blink>`; // 替换
  })

  return l;
}
