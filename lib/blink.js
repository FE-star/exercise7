var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  // console.log('md',md)
  const result=md.replace(/@@(.*?)@@/g,'<blink>$1</blink>');
  // console.log('result',result)
  return result
}