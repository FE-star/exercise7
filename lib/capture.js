module.exports = function (str) {
    var re = /.*\bx=(\d+)\b/;
    var result = re[Symbol.match](str);
    return result ? `${result[1]}` : null;
}
