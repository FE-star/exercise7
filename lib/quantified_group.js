module.exports = function (str) {
  let arr =/^(0x[a-fA-F0-9]{2}\s*){8}$/.exec(str);
  let result = arr ? arr[0] : null;
  return result;
}