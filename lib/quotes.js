module.exports = function (str) {
  // TODO
  var result = str.match(/(\s?("[a-z\s]+")\s?)+/)
  return result && result[2]
}

