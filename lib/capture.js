module.exports = function (str) {
    // TODO
    let res;

    res = str.match(/x=(\d+)/);
    // console.log(res)
    res = res && res[1] || null;
    return res;
}