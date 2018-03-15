module.exports = function (str) {
  return str.match(/^(0x[a-f0-9]{2}\s*){8}$/ig);
}
