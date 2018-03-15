module.exports = function (str) {
  let matchs = str.match(/^(0x[a-f0-9]{2}\s*){8}$/ig);
  return matchs;
}
