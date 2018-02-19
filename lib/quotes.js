module.exports = function (str) {
    const pattern = /\"[\w*\s]*\"/ig
    const temp = str.match(pattern)
    return temp
  // TODO
}