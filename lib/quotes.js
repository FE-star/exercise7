module.exports = function (str) {

  let arr = str.match(/"(.*?)"/g);
  return arr;
}