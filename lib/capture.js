module.exports = function (str) {
  // TODO
  const ret = str.match(/\d+/);
  
  return ret ? ret[0] : null;
}