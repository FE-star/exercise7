module.exports = function (str) {
    // TODO
    let res;

    res = str.match(/".*?"/g);
    // console.log(res)
    return res;
}