module.exports = function (str) {
  // TODO
  var regex = /(?<=\bx=)\d+\b/g;
    var arr = regex.exec(str);
    return arr ? arr[0] : null;
}
