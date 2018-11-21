module.exports = function (str) {
  var res = str.match(/^(0x[a-f0-9]{2}\s+){8}$/i)
  return res ? res.input : null
}