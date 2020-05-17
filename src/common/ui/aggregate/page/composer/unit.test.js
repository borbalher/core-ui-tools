describe('src/common/ui/composer/page', () =>
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
      { name: 'common/ui/aggregate/page' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer     = core.locate('core/schema/composer')
        pageComposer = core.locate('ui/page/composer')
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
