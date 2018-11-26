module.exports = function (str) {
  // TODO
  const ret = [];
  let match;
  const reg = /\"([^\"]*)\"+/g;
  while (match = reg.exec(str)) {
    ret.push(match[0]);
  }

  return ret;
}