module.exports = function (str) {
  // TODO
	let r = null
	return (r = str.match(/(?<=\bx=)\d+\b/g)) ? r[0] : r
}