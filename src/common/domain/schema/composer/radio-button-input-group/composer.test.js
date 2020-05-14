describe('src/common/domain/schema/composer/radio-button-input-group', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../../../../../node/core/factory')

  let
  core,
  composer,
  radioButtonInputGroupComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'core/bootstrap',                          path: 'common/core/bootstrap' },
      { name: 'core/object',                             path: 'common/core/object' },
      { name: 'core/schema',                             path: 'common/core/schema' },
      { name: 'domain/schema',                           path: 'common/domain/schema' },
      { name: 'core/schema/bootstrap',                   path: 'node/core/schema/bootstrap' },
      { name: 'core/data-structure',                     path: 'common/core/data-structure' },
      { name: 'core/component/composer',                 path: 'common/domain/schema/composer/component' },
      { name: 'core/component/radio-button-input',       path: 'common/domain/schema/composer/radio-button-input' },
      { name: 'core/component/radio-button-input-group', path: 'common/domain/schema/composer/radio-button-input-group' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer                      = core.locate('core/schema/composer')
        radioButtonInputGroupComposer = core.locate('core/radio-button-input-group/composer')
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
