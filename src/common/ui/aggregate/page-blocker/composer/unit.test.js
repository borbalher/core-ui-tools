describe('src/common/domain/schema/composer/page-blocker', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  pageBlockerComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create([
      { name: 'core/bootstrap',              path: 'common/core/bootstrap' },
      { name: 'core/object',                 path: 'common/core/object' },
      { name: 'core/schema',                 path: 'common/core/schema' },
      { name: 'domain/schema',               path: 'common/domain/schema' },
      { name: 'core/schema/bootstrap',       path: 'node/core/schema/bootstrap' },
      { name: 'core/data-structure',         path: 'common/core/data-structure' },
      { name: 'core/component/composer',     path: 'common/domain/schema/composer/component' },
      { name: 'core/component/page-blocker', path: 'common/domain/schema/composer/page-blocker' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer            = core.locate('core/schema/composer')
        pageBlockerComposer = core.locate('core/page-blocker/composer')
        done()
      })
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
