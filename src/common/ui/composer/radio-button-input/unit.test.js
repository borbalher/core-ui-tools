describe('src/common/ui/composer/radio-button-input', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('server/core/factory')

  let
  core,
  composer,
  radioButtonInputComposer

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
      composer                 = core.locate('core/schema/composer')
      radioButtonInputComposer = core.locate('ui/radio-button-input/composer')
      done()
    })
  })

  it('Can compose a radio button input group', () =>
  {
    const radioButtonInput = radioButtonInputComposer.compose({
      id        : 'radio-button-input-group',
      title     : 'Text input title',
      name      : 'buttonInputGroup',
      label     : 'label',
      attribute : 'limit',
      disabled  : true,
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
