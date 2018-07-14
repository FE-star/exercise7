module.exports = function (str) {
  let matchArray = /(?:^x|\sx)=([0-9]+)(?=\s|$)/.exec(str);
  console.log(matchArray);

  if (matchArray) {
    return matchArray[1];
  }
  return null;
};