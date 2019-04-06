module.exports = function (str) {
  // TODO
  const arr = str.match(/\"([^\"]*)\"+/g);
  return arr;
}