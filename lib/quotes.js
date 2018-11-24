module.exports = function (str) {
  // TODO
  var regex = /"([\S\s]*?)"/g;
    var arr = str.match(regex);
    return arr;
}
