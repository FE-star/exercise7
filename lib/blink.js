var marked = require('marked')

module.exports = function (str) {
    var md = marked(str)
    // TODO
    //return null;
    return md.replace(/@@([^@]+)@@/g, '<blink>$1</blink>');
}