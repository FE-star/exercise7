module.exports = function (str) {
    // TODO
    let reg = /(\d+)/
    let match = str.match(reg)
    return Array.isArray(match) ? match[1] : match
}