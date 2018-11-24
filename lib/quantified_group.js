module.exports = function (str) {
  // TODO
  let regexp = /^(0x[a-fA-F\d]{2}\s*){8}$/;
  let result = regexp.test(str);
  return result;
}