module.exports = function (str) {
    return str.match(/(?<=x=)\d+/g) ? str.match(/(?<=x=)\d+/g)[0] : null;
}