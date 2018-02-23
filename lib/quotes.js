module.exports = function (str) {
  // TODO
  var reg = /(\"[\w\s]*\")/g;
  var result = str.match(reg);
  return result;
}