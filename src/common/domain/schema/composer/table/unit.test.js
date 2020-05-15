describe('src/common/domain/schema/composer/table', () =>
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
      { name: 'core/bootstrap',          path: 'common/core/bootstrap' },
      { name: 'core/object',             path: 'common/core/object' },
      { name: 'core/schema',             path: 'common/core/schema' },
      { name: 'domain/schema',           path: 'common/domain/schema' },
      { name: 'core/schema/bootstrap',   path: 'node/core/schema/bootstrap' },
      { name: 'core/data-structure',     path: 'common/core/data-structure' },
      { name: 'core/component/composer', path: 'common/domain/schema/composer/component' },
      { name: 'core/component/table',    path: 'common/domain/schema/composer/table' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer      = core.locate('core/schema/composer')
        tableComposer = core.locate('core/table/composer')
        done()
      })
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
