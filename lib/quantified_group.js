module.exports = function (str) {
    // TODO
    let reg = /^(\s?0x[a-fA-F0-9]{2}\s?){8}$/g
    let match = reg.exec(str)
    return Array.isArray(match) ? match[0] : match
}