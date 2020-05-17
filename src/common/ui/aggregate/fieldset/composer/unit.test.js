describe('src/common/ui/composer/fieldset', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  fieldsetComposer

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
      { name: 'common/infrastructure/bus' },
      { name: 'common/core/normalizer' },
      { name: 'common/core/reducer' },
      { name: 'common/core/page' },
      { name: 'common/core/data-structure' },
      { name: 'common/infrastructure/controller' },
      { name: 'common/ui/aggregate/test' },
      { name: 'common/ui/aggregate/component' },
      { name: 'common/ui/aggregate/fieldset' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer         = core.locate('core/schema/composer')
        fieldsetComposer = core.locate('ui/fieldset/composer')
        done()
      })
    })
  })

  it('Can compose a fieldset', () =>
  {
    const fieldset = fieldsetComposer.compose({
      parentId : null,
      template : 'my-fieldset',
      formId   : 'form-id',
      legend   : 'Fieldset',
      name     : 'fieldset',
      id       : 'fieldset'
    })

    expect(() =>
    {
      composer.compose('entity/fieldset', fieldset)
    }).to.not.throw()
  })
})
