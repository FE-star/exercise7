module.exports = function (str) {
    // TODO
    const matchStr = str.match(/[0-9]+/)
    return matchStr ? matchStr[0] : null;
}