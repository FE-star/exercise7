module.exports = function (str) {
    const pattern =/(?<=x=)[\d]+(?![a-zA-z])/
    const exec = new RegExp(pattern).exec(str)
    return exec?exec[0]:exec
  // TODO
}