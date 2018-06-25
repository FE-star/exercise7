module.exports = function (str) {
  // TODO
  return /(?:=)(\d+)/.exec(str) ? /(?:=)(\d+)/.exec(str)[1] : null;
}