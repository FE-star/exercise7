var marked = require("marked");

module.exports = function(str) {
  var md = marked(str);
  // TODO
  // return md.replace(/@@([a-z|<|>|/]*)@@/g, ($1, $2) => {
  //   return `<blink>${$2}</blink>`;
  // });
  return md.replace(
    /@@([a-z|<|>|/]*)@@/g,
    (match, $1) => `<blink>${$1}</blink>`
  );
};
