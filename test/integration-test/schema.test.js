describe('Schema test', () =>
{
  let core

  before(() =>
  {
    const
    CoreFactory = require('node/core/factory'),
    coreFactory = new CoreFactory()

    core        = coreFactory.create({
      schema : require('schema/config')
    })
  })

  it('test', () =>
  {
    console.log('Test')
  })
})
