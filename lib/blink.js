var marked = require('marked')

module.exports = function (str) {
    var md = marked(str)
    const pattern = /@@(.*?)@@/g;  //()捕获,？懒惰
    return md.replace(pattern,'<blink>$1</blink>')
    // TODO
}