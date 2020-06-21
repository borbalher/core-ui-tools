describe('view/template/helper/esc-single-quote', () =>
{
  const
  expect          = require('chai').expect,
  HelperFactory   = require('.'),
  helperFactory   = new HelperFactory(),
  escSingleQuote  = helperFactory.create()

  it('should return a string with escaped single quotes', () => expect(escSingleQuote("foo 'bar'")).to.be.equal("foo \\'bar\\'"))
})
