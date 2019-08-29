module.exports = function (str) {
  const res = str.match(/\bx=\+?\d+\b/);

  if (res) {
    return res[0].replace('+', '').split(/=/)[1];
  }

  return null;
}