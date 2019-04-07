module.exports = function (str) {
    // TODO
    let reg = /\bx=(\d+)\b/
    let match = reg.exec(str)
    return Array.isArray(match) ? match[1] : match
}