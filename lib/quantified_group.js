module.exports = function (str) {
  // TODO
  return (str.match(/0x(?=([0-9A-Fa-f]{2}))/g) || []).length === 8
}