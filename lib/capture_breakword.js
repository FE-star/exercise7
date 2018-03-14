module.exports = function (str) {
  // TODO
const rs = str.replace(/^(.*\s+)?x=(\d+)(\s+.*)?$/, '$2')
  if (rs === str) {
    return null
  }
  else {
    return rs
  }
}