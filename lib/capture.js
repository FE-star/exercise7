module.exports = function (str) {
  // TODO
   var regex = /\d+/;
    var arr = regex.exec(str);
    return arr ? arr[0] : null;
