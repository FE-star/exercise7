module.exports = function (str) {
  return str.match(/0x[A-Fa-f0-9]{2}/g).length === 8;
}