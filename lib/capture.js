module.exports = function (str) {
    const pattern =/(x=)[\d]+/
    const exec = new RegExp(pattern).exec(str)
    if(!exec) return exec
    const result =exec[0].replace('x=','')
    return result
  // TODO
}