module.exports = function (str) {
  // TODO

  const result = str.match(/\".*?\"/g);
  // console.log(result)
  return result
}