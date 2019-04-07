module.exports = function (str) {
    let reg = /("\b.*?\b")+|""/g
    let match, res = []
    while (!!(match = reg.exec(str))) {
        //exec使arr返回匹配的第一个，while循环一次将使re在g作用寻找下一个匹配。
        res.push(match[0])
    }
    return res
}