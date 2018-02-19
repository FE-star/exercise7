module.exports = function (str) {
    const pattern =/(?<=(?<![\w])x=)[\d]+(?!\w)/   //这最后一个\w我是蒙的,[a-zA-Z]无效我能理解，但为什么改成\w就行了...
    const exec = new RegExp(pattern).exec(str)
    return exec?exec[0]:exec
  // TODO
}