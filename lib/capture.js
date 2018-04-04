module.exports = function (str) {
  // TODO
  return /x=(\d*)/.exec(str)[1]==""?null:/x=(\d*)\s?/.exec(str)[1]
}