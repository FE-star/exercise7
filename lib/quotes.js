module.exports = function (str) {
    return str.match(/"[\w\s]*"/g)
}