module.exports = function (str) {
  // TODO
  let regexp = /("[^"]*")/g;
  let result = str.match(regexp);
  return result;
}