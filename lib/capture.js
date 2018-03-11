module.exports = function (str) {
    var reg = /x=(\d+)/;
    var array = str.match(reg) || [];
    return array.length > 1 ? array[1] : array[0];
}
