module.exports = function (str) {
  // TODO
  let regexp = /^(0[xX]\w{2}\s+){8}$/;
  return str.match(regexp);
}