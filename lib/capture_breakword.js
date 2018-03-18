module.exports = function (str) {
  return (str.match(/\bx=(\d+)\b/) || [])[1];
}