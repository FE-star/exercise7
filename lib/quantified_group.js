module.exports = function (str) {
  return (str.match(/0x[0-9a-f]{2}/ig) || []).length === 8
}