describe('src/common/ui/composer/select-input-group', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  selectInputGroupComposer

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
      { name: 'common/core/normalizer' },
      { name: 'common/core/reducer' },
      { name: 'common/core/page' },
      { name: 'common/infrastructure/controller' },
      { name: 'common/ui/aggregate/test' },
      { name: 'common/ui/aggregate/component' },
      { name: 'common/ui/aggregate/select-input' },
      { name: 'common/ui/aggregate/select-input-group' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer                 = core.locate('core/schema/composer')
        selectInputGroupComposer = core.locate('ui/select-input-group/composer')
        done()
      })
    })
  })

  it('Can compose a select input group', () =>
  {
    const selectInputGroup = selectInputGroupComposer.compose({
      attribute : 'addressId',
      disabled  : true,
      parentId  : null,
      readonly  : true,
      required  : true,
      items     : [{ id: 1, type: 'address' }],
      title     : 'Select input title',
      value     : [],
      name      : 'select',
      id        : 'select-input-group'
    })

    expect(() =>
    {
      composer.compose('entity/select-input-group', selectInputGroup)
    }).to.not.throw()
  })
})
