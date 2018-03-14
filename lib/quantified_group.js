module.exports = function (str) {
  // TODO
  return  str.match(/(0x[A-Fa-f\d]{2}\s*)/g).length === 8?str.match(/(0x[A-Fa-f\d]{2}\s*){8}/g):null
}