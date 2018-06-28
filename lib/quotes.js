module.exports = function (str) {
  // TODO
  // 方法1
  // let res = [];
  // let pattern = /("[^"]*")/g; // 这里必须使用全局搜索，否则匹配之后不会继续匹配
  // let tmp;
  // while(tmp = pattern.exec(str)){
  //   res.push(tmp[0]);
  // }

  // 方法2
  return str.match(/("[^"]*")/g);
}