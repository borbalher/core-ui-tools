describe('src/common/domain/schema/composer/page', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  pageComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create([
      { name: 'core/bootstrap',          path: 'common/core/bootstrap' },
      { name: 'core/object',             path: 'common/core/object' },
      { name: 'core/schema',             path: 'common/core/schema' },
      { name: 'domain/schema',           path: 'common/domain/schema' },
      { name: 'core/schema/bootstrap',   path: 'node/core/schema/bootstrap' },
      { name: 'core/data-structure',     path: 'common/core/data-structure' },
      { name: 'core/component/composer', path: 'common/domain/schema/composer/component' },
      { name: 'core/component/page',     path: 'common/domain/schema/composer/page' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer     = core.locate('core/schema/composer')
        pageComposer = core.locate('core/page/composer')
        done()
      })
    })
  })

  it('Can compose a page', () =>
  {
    const myPage = pageComposer.compose({
      id       : 'page',
      name     : 'myPage',
      template : 'my-page',
      schema   : 'entity/my-page'
    })

    expect(() =>
    {
      composer.compose('entity/page', myPage)
    }).to.not.throw()
  })
})
