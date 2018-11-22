module.exports = function (str) {
  // TODO
  return /^(\s*0x[a-zA-Z0-9]{2}\s*){8}$/g.test(str);
}