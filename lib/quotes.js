module.exports = function (str) {
	const reg = /("(\w*\s?)+")+/g;
	return str.match(reg) 
  // TODO
}