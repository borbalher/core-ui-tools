describe('Schema test', () =>
{
  let core

  before(() =>
  {
    const
    CoreFactory = require('../../src/node/core/factory'),
    coreFactory = new CoreFactory()

    core        = coreFactory.create({
      schema : require('../../src/schema/config')
    })
  })

  it('test', () =>
  {
    console.log('Test')
  })
})
