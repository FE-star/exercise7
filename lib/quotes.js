module.exports = function (str) {
    var reg = /\".*?\"/g;
    return str.match(reg)
}
