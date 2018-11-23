module.exports = function (str) {
	// 单词边界
	const reg = /((\bx\b)=([0-9]+)\b[^a-zA-Z]*?).*?/
	const ret = str.match(reg)
	return ret ? ret[3] : null
  // TODO
}