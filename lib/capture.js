module.exports = function (str) {
  return str.match(/(?<=x=)\d+/)
}