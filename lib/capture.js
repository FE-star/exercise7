module.exports = function (str) {
  // TODO
	let r = null
	return (r = str.match(/(?<==)\d+/g)) ? r[0] : r
}