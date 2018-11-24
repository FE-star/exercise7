module.exports = function (str) {
     var regex1 = /x=(\d+)/;
     return str.match(regex1)?str.match(regex1)[1]:null;
}
