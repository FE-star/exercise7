module.exports = function (str) {
    var reg = /\bx=(\d+)\b/;
    var array = str.match(reg) || [];
    return array && array[1]? array[1] : null;
}
