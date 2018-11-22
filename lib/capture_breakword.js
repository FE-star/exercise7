module.exports = function (str) {
  const res = str.match(/(?<=(^|\s)x=)\d+(?=($|\s))/g)
  return res ? res[0] : null;
}