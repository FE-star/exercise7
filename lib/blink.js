var marked = require('marked')

module.exports = function (str) {
  var md = marked(str);
  md = md.replace(/@@(?=.)/, '<blink>');
  md = md.replace(/\s@@(?=.)/g, ' <blink>');
  md = md.replace(/(?=.)@@(?=[<|\s|!])/g, '</blink>');
  return md;
}
