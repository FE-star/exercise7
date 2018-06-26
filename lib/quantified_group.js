module.exports = function (str) {
  // TODO
  const regex = /^((0x\w{2})\s*){8}$/;
  return regex.test(str)
}