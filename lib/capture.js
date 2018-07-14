module.exports = function (str) {
  let matchArray = /x=([0-9]+)/.exec(str);
  if (matchArray) {
    return matchArray[1];
  }
  return null;
};