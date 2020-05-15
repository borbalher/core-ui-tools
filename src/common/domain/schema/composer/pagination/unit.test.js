describe('src/common/domain/schema/composer/password-input', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  paginationComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'core/bootstrap',            path: 'common/core/bootstrap' },
      { name: 'core/object',               path: 'common/core/object' },
      { name: 'core/schema',               path: 'common/core/schema' },
      { name: 'domain/schema',             path: 'common/domain/schema' },
      { name: 'core/schema/bootstrap',     path: 'node/core/schema/bootstrap' },
      { name: 'core/data-structure',       path: 'common/core/data-structure' },
      { name: 'core/component/composer',   path: 'common/domain/schema/composer/component' },
      { name: 'core/component/pagination', path: 'common/domain/schema/composer/pagination' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer           = core.locate('core/schema/composer')
        paginationComposer = core.locate('core/pagination/composer')
        done()
      })
    })
  })

  it('Can compose a pagination', () =>
  {
    const pagination  = paginationComposer.compose({
      totalElements : 100,
      selectedPage  : 1,
      offset        : 2,
      limit         : 10,
      name          : 'pagination',
      id            : 'pagination'
    })

    expect(() =>
    {
      composer.compose('entity/pagination', pagination)
    }).to.not.throw()
  })
})
