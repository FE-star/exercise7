module.exports = function (str) {
  // TODO
  const regex= /\S*(?:x=|x= |x = )([1-9]+)/;
  let result = regex.exec(str);
  return result ? result[1] : null;
}