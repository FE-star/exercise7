module.exports = function (str) {
  // TODO
  var obj = /(?:^|\s+)x=([0-9]+)(?:$|\s+)/.exec(str)
  return obj && obj[1]
}
