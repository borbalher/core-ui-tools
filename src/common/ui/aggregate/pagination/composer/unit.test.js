describe('src/common/ui/composer/password-input', () =>
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
      { name: 'common/core/bootstrap' },
      { name: 'common/core/object' },
      { name: 'common/core/schema' },
      { name: 'node/core/schema/bootstrap' },
      { name: 'common/core/data-structure' },
      { name: 'common/ui/schema' },
      { name: 'common/infrastructure/bus' },
      { name: 'common/core/store' },
      { name: 'common/view/handlebars' },
      { name: 'common/core/listener' },
      { name: 'common/core/normalizer' },
      { name: 'common/core/reducer' },
      { name: 'common/core/page' },
      { name: 'common/infrastructure/controller' },
      { name: 'common/ui/aggregate/test' },
      { name: 'common/ui/aggregate/component' },
      { name: 'common/ui/aggregate/pagination' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer           = core.locate('core/schema/composer')
        paginationComposer = core.locate('ui/pagination/composer')
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
