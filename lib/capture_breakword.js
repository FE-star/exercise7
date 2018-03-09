module.exports = function (str) {
  // TODO
  
  var reg = /\bx=(\d*)\b/;
  return reg.exec(str) ? (reg.exec(str)[1] ? reg.exec(str)[1] : null) : reg.exec(str) ;
}