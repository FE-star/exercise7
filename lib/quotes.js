module.exports = function (str) {
  // TODO
  var result = str.match(/([a-z\s]*("[a-z\s]+")[a-z\s]*)+/)
  return result && result[2]
}

