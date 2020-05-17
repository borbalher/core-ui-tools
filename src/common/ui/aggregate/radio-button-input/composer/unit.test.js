describe('src/common/ui/composer/radio-button-input', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  radioButtonInputComposer

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
      { name: 'common/ui/aggregate/radio-button-input' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer                 = core.locate('core/schema/composer')
        radioButtonInputComposer = core.locate('ui/radio-button-input/composer')
        done()
      })
    })
  })

  it('Can compose a radio button input group', () =>
  {
    const radioButtonInput = radioButtonInputComposer.compose({
      id        : 'radio-button-input-group',
      title     : 'Text input title',
      name      : 'buttonInputGroup',
      attribute : 'limit',
      disabled  : true,
      parentId  : null,
      readonly  : true,
      required  : true,
      value     : '15'
    })

    expect(() =>
    {
      composer.compose('entity/radio-button-input', radioButtonInput)
    }).to.not.throw()
  })
})
