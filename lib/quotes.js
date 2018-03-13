module.exports = function (str) {
  let regexp = /".*?"/g;
  return str.match(regexp)
}