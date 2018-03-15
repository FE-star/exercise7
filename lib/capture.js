module.exports = function(str) {
  let matchs = str.match(/(x=)(\d+)/);
  return matchs ? RegExp.$2 : null;
}
