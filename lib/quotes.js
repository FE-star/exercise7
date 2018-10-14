module.exports = function (str) {
  // TODO
  var regex = /"([^"]|(?<=\\)")*"/g
  var matches = str.match(regex)
  return str.match(regex)
}