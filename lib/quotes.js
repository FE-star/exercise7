module.exports = function (str) {
  let reg = /"[^"]*"/g
  let result = str.match(reg)
  // let result = reg.exec(str)
  return result
}