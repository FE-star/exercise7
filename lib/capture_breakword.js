module.exports = function (str) {
  // TODO
  const arr = str.match(/\b(x=(\d+)\b)/);
  return arr ? arr[0].split('x=')[1] : null;
}