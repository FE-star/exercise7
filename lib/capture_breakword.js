module.exports = function (str) {
  // TODO
  const regex= /(?:\S+\s+x=|^x=)([1-9]+)(?:\s+\S+)*$/;
  let result = regex.exec(str);
  return result ? result[1] : null;
}