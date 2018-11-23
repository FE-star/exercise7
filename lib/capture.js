module.exports = function (str) {
	const reg = /.*?x=([0-9]+).*?/
	const ret = str.match(reg)
	return ret ? ret[1] : null
  // TODO
}