module.exports = function (str) {
  // TODO
  //var reg = /"(.*?)"/g;
  var reg = /"[\w\s]*"/g
  return str.match(reg);
}