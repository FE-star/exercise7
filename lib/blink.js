var MARK_MAP = {
  '@@': 'blink',
  '__': 'strong',
  '\\*\\*': 'strong',
  '\\*': 'em'
}

module.exports = function (str) {
  let aaaa = `<p>${str}</p>`
  for (let key in MARK_MAP) {
    aaaa = aaaa.replace(new RegExp(`${key}(.+?)${key}`, 'g'), function (match, p1) {
      return `<${MARK_MAP[key]}>${p1}</${MARK_MAP[key]}>`
    })
  }

  return aaaa
}