module.exports = function (str) {
  var matches = /^(.*\s+)?x=([\d]+)(\s+.*)?$/g.exec(str)
  return matches ? matches[2] : null;
}