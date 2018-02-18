module.exports = function (str) {
    const pattern =/[\w]*x=[\w]+/
    const exec = new RegExp(pattern).exec(str)
    if(!exec) return exec
    if(exec[0][0]!=='x') return null
    const result =exec[0].replace('x=','')
    if(!result.match(/[a-zA-Z]+/))return result;
    return null
  // TODO
}