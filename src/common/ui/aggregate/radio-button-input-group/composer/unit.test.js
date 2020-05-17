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
      { name: 'common/core/bootstrap' },
      { name: 'common/core/object' },
      { name: 'common/core/schema' },
      { name: 'node/core/schema/bootstrap' },
      { name: 'common/core/data-structure' },
      { name: 'common/ui/schema' },
      { name: 'common/ui/aggregate/component' },
      { name: 'common/ui/aggregate/radio-button-input' },
      { name: 'common/ui/aggregate/radio-button-input-group' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer                      = core.locate('core/schema/composer')
        radioButtonInputGroupComposer = core.locate('ui/radio-button-input-group/composer')
        done()
      })
    })
  })

  it('Can compose a radio button input group', () =>
  {
    const radioButtonInputGroup = radioButtonInputGroupComposer.compose({
      attribute : 'limit',
      disabled  : true,
      parentId  : null,
      readonly  : true,
      required  : true,
      buttons   : [{
        name : '15',
        id   : '15'
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
