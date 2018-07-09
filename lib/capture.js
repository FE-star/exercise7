module.exports = function (str) {
  
  // TODO
  let reg = /x=([1-9]+)/;
  
  return str.match(reg) ? str.match(reg)[1] : null
  
}