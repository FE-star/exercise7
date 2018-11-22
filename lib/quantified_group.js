module.exports = function (str) {
  // TODO
  var regex = /^(0x[a-fA-F0-9]{2}\s+){8}$/;
    var arr = regex.exec(str);
    return arr ? arr[0] : null;
}
