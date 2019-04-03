module.exports = function (str) {
  // TODO
  var a = str.match(/x=\d+/);
  // console.log('a:'+a);
  if(a){
    return a[0].slice(2);
  }else{
    return null;
  }
}