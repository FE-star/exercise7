module.exports = function (str) {
  let regexp = /\bx=(\d*)\b/;
  return regexp.exec(str) ? (regexp.exec(str)[1] ? regexp.exec(str)[1] : null) : regexp.exec(str)
}