module.exports = function (str) {
  // TODO
  const rs = str.replace(/^.*x\s?=(\d+).*$/g, '$1')
  if (rs === str) {
    return null
  }
  return rs
}