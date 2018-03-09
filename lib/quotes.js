module.exports = function (str) {
  // TODO
  
  var reg = /".*?"/g;
  return str.match(reg);
}