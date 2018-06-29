module.exports = function (str) {
  // TODO
  // 0x开头 [A-Fa-f0-9]{2} 两位 \s* 换行空格等不限 {8}$总共8位
  return /^(0x[A-Fa-f0-9]{2}\s*){8}$/g.test(str);
}
