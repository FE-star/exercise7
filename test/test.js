const assert = require('assert')

describe('regex', function () {
  it('可以捕获正整数 x 的值', function () {
    const f = require('../lib/capture')

    assert.equal(f('x=5'), '5', 'x=5')
    assert.equal(f('abc x=5'), '5', 'abc x=5')
    assert.equal(f('x=abc'), null, 'x=abc')
    assert.equal(f('x=0'), '0', 'x=0')
    assert.equal(f('x=-10'), null, 'x=-10')
    assert.equal(f('beep x=123123 boop'), '123123', 'beep x=123123 boop')
  })

  it('可以捕获正整数 x 的值，末尾带有 x 的变量不应当被捕获', function () {
    const f = require('../lib/capture_breakword')

    assert.equal(f('x=5'), '5', 'x=5')
    assert.equal(f('abc x=5'), '5', 'abc x=5')
    assert.equal(f('fox=123'), null, 'fox=123')
    assert.equal(f('x=abc'), null, 'x=abc')
    assert.equal(f('x=33qrs'), null, 'x=33qrs')
    assert.equal(f('3x=33'), null, '3x=33')
    assert.equal(f('beep x=123123 boop'), '123123', 'beep x=123123 boop')
    assert.equal(f('beep x=123123 ax=2'), '123123', 'beep x=123123 boop')
  })

  it(`匹配8位 hex 代码，以'0x'开头，后面跟着两个字符可以是大写'A-F'，小写'a-f'，或者任意数字`, function () {
    const f = require('../lib/quantified_group')

    assert.ok(
      f('0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF\n'),
      '0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF\\n'
    )
    assert.ok(
      f('0x00\n0x11\n0x22\n0x33\n0x44\n0x55\n0x66\n0x77\n'),
      '0x00\\n0x11\\n0x22\\n0x33\\n0x44\\n0x55\\n0x66\\n0x77'
    )
    assert.ok(
      f('0x0f  0x1f  0x2f  0x3f  0x4f  0x5f  0x6f  0x7f\n'),
      '0x0f  0x1f  0x2f  0x3f  0x4f  0x5f  0x6f  0x7f\\n'
    )
    assert.ok(
      f('0xE2 0xC3 0xB3 0xD0 0x44 0x9E 0x6F 0x7F\n'),
      '0xE2 0xC3 0xB3 0xD0 0x44 0x9E 0x6F 0x7F\\n'
    )
    assert.ok(
      !f('0xE2 0xC3 0xB3 0xD0 0x44 0x9E 0x6F\n'),
      '0xE2 0xC3 0xB3 0xD0 0x44 0x9E 0x6F\n'
    )
    assert.ok(
      !f('0xE2 0xC3 0xB3 0xD0 0x44 0x9E 0x6F 0xff 0xff\n'),
      '0xE2 0xC3 0xB3 0xD0 0x44 0x9E 0x6F 0xff 0xff\n'
    )
  })

  it('匹配所有引号', function () {
    const f = require('../lib/quotes')
    assert.deepEqual(
      f('one "two three four" five six "seven eight" nine'),
      ['"two three four"','"seven eight"'],
      'one "two three four" five six "seven eight" nine'
    )
    assert.deepEqual(
      f('"beep boop" whatever "tacos" eleven "eighty"'),
      ['"beep boop"','"tacos"','"eighty"'],
      '"beep boop" whatever "tacos" eleven "eighty"'
    )
    assert.deepEqual(f('empty ""'), ['""'], 'empty ""')
  })

  it(`将'@@...@@'markdown语法变成'<blink>...</blink>'`, function () {
    const f = require('../lib/blink')
    
    assert.equal(
      f('@@whatever@@').trim(),
      '<p><blink>whatever</blink></p>',
      '@@whatever@@'
    )
    assert.equal(
      f('*abc* @@def@@ __ghi__').trim(),
      '<p><em>abc</em> <blink>def</blink> <strong>ghi</strong></p>',
      '*abc* @@def@@ __ghi__'
    )
    assert.equal(
      f('@@**cool**@@').trim(),
      '<p><blink><strong>cool</strong></blink></p>',
      '@@**cool**@@'
    )
    assert.equal(
      f('beep @@boop@@ says *the* @@**robot**@@!').trim(),
      '<p>beep <blink>boop</blink> says <em>the</em>'
        + ' <blink><strong>robot</strong></blink>!</p>',
      'beep @@boop@@ says *the* @@**robot**@@!'
    )
  })
})