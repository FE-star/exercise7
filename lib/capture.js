module.exports = function (str) {
  // TODO
  return (/x=(\d+)/.exec(str) || [])[1] || null
}