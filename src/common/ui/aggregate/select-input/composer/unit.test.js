describe('src/common/ui/composer/select-input', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  selectInputComposer

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
      { name: 'common/ui/aggregate/select-input' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer            = core.locate('core/schema/composer')
        selectInputComposer = core.locate('ui/select-input/composer')
        done()
      })
    })
  })

  it('Can compose a select input', () =>
  {
    const selectInput = selectInputComposer.compose({
      attribute : 'addressId',
      disabled  : true,
      parentId  : null,
      readonly  : true,
      required  : true,
      items     : [{ id: 1, type: 'address' }],
      title     : 'Select input title',
      value     : [],
      name      : 'select',
      id        : 'select-input'
    })

    expect(() =>
    {
      composer.compose('entity/select-input', selectInput)
    }).to.not.throw()
  })
})
