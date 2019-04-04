module.exports = function (str) {
  // TODO
  if(str.match(/(\bx=)+(\d{1,}\b)/)){
     return str.match(/(\bx=)+(\d{1,}\b)/)[2]
  }else{
    return null;
  }
}