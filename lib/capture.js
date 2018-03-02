module.exports = function (str) {
  // TODO
    var patt =  /x=[0-9]+/;
    if(patt.test(str)){
        return patt.exec(str)[0].slice(2);
    }else{
        return null;
    }
}