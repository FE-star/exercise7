var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  return md.replace(/@@(.*?)@@/g,function(match,text){
    return "<blink>"+ text +"</blink>"
  })
}