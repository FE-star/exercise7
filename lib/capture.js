module.exports = function (str) {
  // TODO
  let regexp = /x=(\d+)/;
  let result = regexp.exec(str);
  return result && result[1];
}