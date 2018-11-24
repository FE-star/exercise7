module.exports = function (str) {
  // TODO
  const reg = /^(0x[a-fA-F0-9]{2}\s*){8}$/;
  return reg.test(str);
}