module.exports = function (str) {
  // TODO
  let res = /^(0x[a-fA-F0-9]{2}\s*){8}$/;
  return res.test(str);
}