module.exports = function (str) {
  // TODO
  let arr=str.match(/\"([^\"]*)\"/g)
  return arr;
}