let data = [123, 2, 1, 3123456, 1234567809, 12349333.04934];

// nodejs环境下暂不支持
function process(arr) {
  return arr.map(num => num.toString().replace(/(?<!\.\d*?)(\d+?)(?=(?:\d{3})+\b)/g, "$1,"))
}

console.log(process(data));