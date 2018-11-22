module.exports = function (str) {
  const res = str.match(/0x[a-fA-F\d]{2}\s+/g)
  if (res && res.length === 8)
    return true
  else
    return false
}