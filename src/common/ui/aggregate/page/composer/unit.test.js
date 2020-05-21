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
      { name: 'common/core/schema' },
      { name: 'common/ui/aggregate/component/composer' },
      { name: 'common/ui/aggregate/page/composer' }
    ])

    core.load().then(() =>
    {
      composer     = core.locate('core/schema/composer')
      pageComposer = core.locate('ui/page/composer')
      done()
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
