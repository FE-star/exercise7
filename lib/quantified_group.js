module.exports = function (str) {
  // TODO
    var patt = /^(0x[a-f,A-F,0-9]{2}\s*){8}$/g;
    return patt.test(str);

}