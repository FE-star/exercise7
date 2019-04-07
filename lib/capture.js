module.exports = function (str) {
    // TODO
    let reg = /\d+/
    let match = reg.exec(str)
    return Array.isArray(match) ? match[0] : match
}