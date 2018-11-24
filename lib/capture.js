module.exports = function (str) {
  var matches = /^.*x=([\d]+)/g.exec(str)
  return matches ? matches[1] : null;
}