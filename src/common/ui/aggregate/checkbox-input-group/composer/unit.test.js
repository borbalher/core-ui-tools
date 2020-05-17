describe('src/common/ui/composer/checkbox-input-group', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  checkboxInputGroupComposer

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
      { name: 'common/ui/aggregate/checkbox-input' },
      { name: 'common/ui/aggregate/checkbox-input-group' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer                   = core.locate('core/schema/composer')
        checkboxInputGroupComposer = core.locate('ui/checkbox-input-group/composer')
        done()
      })
    })
  })

  it('Can compose a checkbox input group', () =>
  {
    const
    checkboxInputGroup = checkboxInputGroupComposer.compose({
      attribute : 'checkbox',
      disabled  : true,
      parentId  : null,
      readonly  : true,
      required  : true,
      title     : 'Text input title',
      value     : true,
      name      : 'checkbox',
      id        : 'checkbox-input-group'
    })

    expect(() =>
    {
      composer.compose('entity/checkbox-input-group', checkboxInputGroup)
    }).to.not.throw()
  })
})
