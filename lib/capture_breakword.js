module.exports = function (str) {
  // TODO
  let regexp =  /\bx=(\d*)\b/;
  let res = regexp.exec(str) ? (regexp.exec(str)[1] ? regexp.exec(str)[1] : null) : regexp.exec(str);
  return res;
}