var marked = require('marked')

module.exports = function (str) {
    var md = marked(str)
    const pattern1 = /@@/;
    let countAt = 0;
    while(md.match(pattern1)){
        if(countAt%2!==0){
            md = md.replace(pattern1,'</blink>')
        }else {
            md = md.replace(pattern1,'<blink>')
        }
        countAt++;
    }
    // TODO
    return md
}