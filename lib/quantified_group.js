module.exports = function (str) {
    const pattern = /0x[A-f0-9]{2}/i
    let count = 0
    while(str.match(pattern)){
        str = str.replace(pattern,'')
        count++
    }
    if(count===8)return true
    return null
  // TODO
}