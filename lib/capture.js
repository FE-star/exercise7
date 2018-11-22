module.exports = function (str) {
  const res = str.match(/(?<=x=)\d+/g)
  return res ? res[0] : null;
}