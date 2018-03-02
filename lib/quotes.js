module.exports = function (str) {
  // TODO
    var patt = /(\"[\w\s]*\")/g; //不知道为什么不能用'.'代替'[\w\s]'
    return str.match(patt)
}