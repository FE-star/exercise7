module.exports = function (str) {
  // TODO
  const regExp = /^(0x[a-zA-Z0-9]{2}\s+){8}$/g;
  return regExp.test(str);
}