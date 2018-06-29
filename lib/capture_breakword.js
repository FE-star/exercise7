module.exports = function (str) {
    var regExpBreak = /.*\bx=([1-9][0-9]*)\b.*/;
    if(Array.isArray(regExpBreak.exec(str))) {
        return regExpBreak.exec(str)[1];
    }
    return null;
}