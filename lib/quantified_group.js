module.exports = function (str) {
  // TODO
  const result =(/^(0x[A-Fa-f0-9]{2}\s*){8}$/).test(str);
  // console.log(result)
  return result
}