module.exports = function (str) {
  // TODO
   var regex = /(\d+)\b/;
    var arr = regex.exec(str);
    return arr ? arr[0] : null;
  
}
