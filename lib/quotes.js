module.exports = function(str) {
  // TODO
  return str.match(/(\"[a-z\s]+\")/g) || str.match(/(\"[\s\S]{0}\")/g);
};
