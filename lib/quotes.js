module.exports = function (str) {
  // TODO
  let regexp =  /".*?"/g;
  return str.match(regexp);
}