module.exports = function (str) {
	const reg = /^(0x([A-Fa-f0-9]{2})\n*?\s*?){8}$/g
	return reg.test(str)
  // TODO
}