module.exports = function (str) {
  const regExp = /("[^"]*")/g
  let temp;
  let result = []
  while((temp = regExp.exec(str)) !== null) {
    result.push(temp[1])
  }
  return result
}