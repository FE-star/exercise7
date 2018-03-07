module.exports = function (str) {
  // TODO
  var reg = new RegExp(/x=\d{1,}/, "g");
  var arr = reg.exec(str);
  if(arr == null) return null;

  return arr[0].split("x=")[1];
}