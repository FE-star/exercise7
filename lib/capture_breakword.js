module.exports = function (str) {
  // TODO
  return /(?:\s|^)(?:x=)(\d+)(?:\s|$)/.exec(str) ? /(?:\s|^)(?:x=)(\d+)(?:\s|$)/.exec(str)[1] : null;
}