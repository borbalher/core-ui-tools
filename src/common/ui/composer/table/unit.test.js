describe('src/common/ui/composer/table', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  tableComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'common/core/schema' },
      { name: 'common/ui/aggregate/component/composer' },
      { name: 'common/ui/aggregate/table/composer' }
    ])

    core.load().then(() =>
    {
      composer      = core.locate('core/schema/composer')
      tableComposer = core.locate('ui/table/composer')
      done()
    })
  })

  it('Can compose a text input', () =>
  {
    const table = tableComposer.compose({
      name : 'table',
      id   : 'my-table'
    })

    expect(() =>
    {
      composer.compose('entity/table', table)
    }).to.not.throw()
  })
})
