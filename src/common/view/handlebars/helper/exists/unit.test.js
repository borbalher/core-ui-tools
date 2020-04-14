describe('view/template/helper/exists', () =>
{
  const
  expect        = require('chai').expect,
  HelperFactory = require('.'),
  isEqual       = require('lodash.isequal'),
  helperFactory = new HelperFactory(isEqual),
  exists        = helperFactory.create()

  it('should return true if object exists', () => expect(exists({ id: 1 }, [{ id: 1 }])).to.be.equal(true))

  it('should return false if object does not exists', () => expect(exists({ id: 4 }, [{ id: 1 }])).to.be.equal(false))
})
