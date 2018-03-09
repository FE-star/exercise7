module.exports = function (str) {
  // TODO
  
  var reg = /x=(\d*)/;
  return reg.exec(str)[1] ? reg.exec(str)[1] : null
}