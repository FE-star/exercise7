module.exports = function (str) {
  // TODO
  var reg = new RegExp(/\bx=\d{1,}\b/, "g");
  var arr = reg.exec(str);
  if(arr == null) return null;

  return arr[0].split("x=")[1];
}