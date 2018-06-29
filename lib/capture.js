module.exports = function (str) {
    let regExpNum = /.*\bx=([1-9][0-9]*)\b.*/;
    if(Array.isArray(regExpNum.exec(str))) {
       return regExpNum.exec(str)[1];
    }
    return null;
}