module.exports = function (str) {
  // TODO
  const result = str.match(/\=(\d+)/);
  // console.log(result)
  return result && result[1];
}