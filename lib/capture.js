module.exports = function (str) {
  const res = /x=\d+/.exec(str);

  if (res) {
    return res[0].split(/=/)[1];
  }

  return null;
}