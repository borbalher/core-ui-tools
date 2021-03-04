describe('src/common/ui/composer/page-blocker', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('server/core/factory')

  let
  core,
  composer,
  pageBlockerComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create([
      { name: 'server/core/dictionary' },
      { name: 'common/core/schema' },
      { name: 'common/ui/composer' }
    ])

    core.load().then(() =>
    {
      composer            = core.locate('core/schema/composer')
      pageBlockerComposer = core.locate('ui/page-blocker/composer')
      done()
    })
  })

  it('Can compose a page-blocker', () =>
  {
    const pageBlocker = pageBlockerComposer.compose({
      id        : 'page-blocker',
      name      : 'pageBlocker',
      isBlocked : true
    })

    expect(() =>
    {
      composer.compose('entity/page-blocker', pageBlocker)
    }).to.not.throw()
  })
})
