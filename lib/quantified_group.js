module.exports = function (str) {
    // var reg = /^(0[xX][0-9a-fA-F]{2}\s+){8}$/;
    var reg = /^(0[xX]\w{2}\s+){8}$/;
    var array = str.match(reg);
    return array;
}
