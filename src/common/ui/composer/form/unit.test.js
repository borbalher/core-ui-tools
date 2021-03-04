describe('src/common/ui/composer/form', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('server/core/factory')

  let
  core,
  composer,
  formComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'server/core/dictionary' },
      { name: 'common/core/schema' },
      { name: 'common/ui/composer' }
    ])

    core.load().then(() =>
    {
      composer     = core.locate('core/schema/composer')
      formComposer = core.locate('ui/form/composer')
      done()
    })
  })

  it('Can compose a form', () =>
  {
    const form = formComposer.compose({
      schema   : 'entity/my-form',
      template : 'my-form',
      title    : 'Form title',
      name     : 'text',
      id       : 'form'
    })

    expect(() =>
    {
      composer.compose('entity/form', form)
    }).to.not.throw()
  })
})
