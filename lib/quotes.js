module.exports = function (str) {
    var re = /".*?"/g;
    var result = re[Symbol.match](str);
    return result;
}
