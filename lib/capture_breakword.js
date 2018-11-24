module.exports = function (str) {
    // TODO
    let res;
    res = str.match(/\bx=(\d+)\b/);
    // console.log(res)
    res = res && res[1] || null;
    return res;

}