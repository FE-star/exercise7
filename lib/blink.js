var marked = require('marked');

module.exports = function(str) {
  var md = marked(str);
  return md.replace(/(@@)(.*?)(@@)/g, function(match, p1, p2, p3) {
    return '<blink>' + p2 + '</blink>';
  });
  // TODO
};
