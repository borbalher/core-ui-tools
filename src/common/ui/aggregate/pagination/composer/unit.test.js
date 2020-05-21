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
      { name: 'common/core/schema' },
      { name: 'common/ui/aggregate/component/composer' },
      { name: 'common/ui/aggregate/pagination/composer' }
    ])

    core.load().then(() =>
    {
      composer           = core.locate('core/schema/composer')
      paginationComposer = core.locate('ui/pagination/composer')
      done()
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
