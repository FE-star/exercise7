module.exports = function (str) {
  // TODO
  var reg=/\bx=(\d+)\b/;
  var result=reg.exec(str);
  return result&&result[1];
}
