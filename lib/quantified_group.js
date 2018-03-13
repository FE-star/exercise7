module.exports = function (str) {
  let regexp = /^(0x[A-Fa-f0-9]{2}\s+){8}$/; 
  return str.match(regexp)
}