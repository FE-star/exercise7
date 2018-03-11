module.exports = function (str) {
  // TODO
  //let regexp = /(?<=x\=).+/; // 浏览器可以使用
  let regexp = /x=(\d+)/;
  let res = regexp.exec(str) ? regexp.exec(str)[1] : null;
  // console.log(res[1]);
  return res;
}