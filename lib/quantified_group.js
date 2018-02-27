module.exports = function (str) {
  // TODO
  return /^(0x[a-f0-9]{2}\s{0,}){8}$/ig.test(str);
}