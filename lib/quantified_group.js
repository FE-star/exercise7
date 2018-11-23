module.exports = function (str) {
    return str.match(/^(0x[A-Fa-f0-9]{2}(\s)*){8}\n/);
}
