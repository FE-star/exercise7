module.exports = function (str) {
    var arr = str.split(/\s/);
    arr = arr.filter((item) => item);
    if(arr.length != 8) {
        return false;
    }
    arr.forEach((item) => {
        let regExp = /Ox[A-Fa-f0-9]{2}/;
        if(!regExp.test(item)) {
            return false;
        }
    });
    return true;
}