describe('src/common/ui/composer/radio-button-input-group', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  radioButtonInputGroupComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'common/core/schema' },
      { name: 'common/ui/aggregate/component/composer' },
      { name: 'common/ui/aggregate/radio-button-input/composer' },
      { name: 'common/ui/aggregate/radio-button-input-group/composer' }
    ])

    core.load().then(() =>
    {
      composer                      = core.locate('core/schema/composer')
      radioButtonInputGroupComposer = core.locate('ui/radio-button-input-group/composer')
      done()
    })
  })

  it('Can compose a radio button input group', () =>
  {
    const radioButtonInputGroup = radioButtonInputGroupComposer.compose({
      attribute : 'limit',
      disabled  : true,
      readonly  : true,
      required  : true,
      buttons   : [{
        label : '15',
        name  : '15',
        id    : '15'
      }],
      id    : 'radio-button-input-group',
      title : 'Text input title',
      name  : 'buttonInputGroup',
      value : '15'
    })

    expect(() =>
    {
      composer.compose('entity/radio-button-input-group', radioButtonInputGroup)
    }).to.not.throw()
  })
})
