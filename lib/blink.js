var marked = require('marked')

module.exports = function (str) {
    let md = marked(str)
    // TODO
    let reg = /@@(\S+)@@/g
    let res = md.replace(reg, function (word, $1) {
        return '<blink>' + $1 + '</blink>'
    })
    return res
}