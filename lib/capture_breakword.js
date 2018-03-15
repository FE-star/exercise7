module.exports = function(str) {
  let matchs = str.match(/\b(x=)(\d+)\b/);
  return matchs ? RegExp.$2 : null;
}
