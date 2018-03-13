module.exports = function (str) {
	let regexp = /\d+/;
  return str.match(regexp);
}