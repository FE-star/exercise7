module.exports = function (str) {
  // TODO
  let pattern = /^(0x[a-fA-F\d]{2}\s+){8}$/;
  let res = pattern.exec(str);
  return res && res[0];
}