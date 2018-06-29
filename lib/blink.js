var marked = require('marked')

module.exports = function (str) {
  let md = marked(str)
  let result = ''
  // console.log('md 打印结果为: \n', md);

  const reEm = /\*(.*?)\*/g
  const reBlink = /@@(.*?)@@/g
  const reStrong = /\*\*(.*?)\*\*/g

  if (reEm.exec(md)) {
    result = md.replace(reEm, '<em>$1</em>')
  }
  if (reBlink.exec(md)) {
    result = md.replace(reBlink, '<blink>$1</blink>')
  }
  if (reStrong.exec(md)) {
    result = md.replace(reStrong, '<strong>$1</strong>')
  }

  return result
}
