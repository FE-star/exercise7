module.exports = function (str) {
    const pattern = /0x[A-f0-9]{2}/ig
    const result = str.match(pattern)
    return result.length===8?true:null
  // TODO
}