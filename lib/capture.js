module.exports = function (str) {
  // TODO
  let reg =/x=(\d+)/;
  let result = reg.exec(str) ? reg.exec(str)[1] : null;
  return result;
}