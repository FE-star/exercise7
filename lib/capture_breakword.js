module.exports = function (str) {
  // TODO
    const matchStr = str.match(/(?:^|\s)x=([0-9]+)(?:$|\s)/);
    return matchStr ? matchStr[1] : null;
}