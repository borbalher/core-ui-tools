describe('src/common/ui/composer/form', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  formComposer

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
      { name: 'common/ui/aggregate/component' },
      { name: 'common/ui/aggregate/form' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer     = core.locate('core/schema/composer')
        formComposer = core.locate('ui/form/composer')
        done()
      })
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
