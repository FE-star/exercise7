var marked = require('marked')

module.exports = function (str) {
  let md = marked(str)
  // console.log('md', md)

  // const reEm = /\*(.*?)\*/g
  // const reBlink = /@@(.*?)@@/g
  // const reStrong = /\*\*(.*?)\*\*/g
  // let result = ''
  // // console.log('md', md, 'reEm.exec(md)', reEm.exec(md))
  // if (reEm.exec(md)) {
  //   result = md.replace(reEm, '<em>$1</em>')
  // }

  // console.log('result1md', md)
  // // console.log('md', md, 'reBlink.exec(md)', reBlink.exec(md))
  // if (reBlink.exec(md)) {
  //   result = md.replace(reBlink, '<blink>$1</blink>')
  // }
  // console.log('result2md', md)
  // // console.log('md', md, 'reStrong.exec(md)', reStrong.exec(md))
  // if (reStrong.exec(md)) {
  //   result = md.replace(reStrong, '<strong>$1</strong>')
  // }
  // console.log('result3md', md)
  console.log(md)
  console.log(md.replace(/@@([\w\W]+?)@@/g, `<blink>$1</blink>`))
  return md.replace(/@@([\w\W]+?)@@/g, `<blink>$1</blink>`)
}