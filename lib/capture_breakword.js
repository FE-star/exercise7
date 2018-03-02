module.exports = function (str) {
  // TODO
    var patt =/\b(?:x=)[0-9]+\b/;
    if(patt.test(str)){
        return patt.exec(str)[0].slice(2);
    }else{
        return null;
    }
}