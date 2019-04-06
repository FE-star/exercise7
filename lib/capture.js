module.exports = function (str) {
  // TODO
  const arr = str.match(/x=(\d+)/);
  return arr ? arr[0].split('x=')[1] : null;
}