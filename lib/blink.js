var marked = require('marked')

module.exports = function (str) {
    var md = marked(str)
    // TODO
    return md.replace(/@@([\w\W]+?)\@@/g, `<blink>$1</blink>`);
}