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
      { name: 'node/core/dictionary' },
      { name: 'common/core/schema' },
      { name: 'common/ui/composer' }
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
      schema   : 'entity/my-page',
      title    : 'My page',
      lang     : 'es'
    })

    expect(() =>
    {
      composer.compose('entity/page', myPage)
    }).to.not.throw()
  })
})
