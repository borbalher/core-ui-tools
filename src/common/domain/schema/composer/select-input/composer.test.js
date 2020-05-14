describe('src/common/domain/schema/composer/select-input', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../../../../../node/core/factory')

  let
  core,
  composer,
  selectInputComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'core/bootstrap',              path: 'common/core/bootstrap' },
      { name: 'core/object',                 path: 'common/core/object' },
      { name: 'core/schema',                 path: 'common/core/schema' },
      { name: 'domain/schema',               path: 'common/domain/schema' },
      { name: 'core/schema/bootstrap',       path: 'node/core/schema/bootstrap' },
      { name: 'core/data-structure',         path: 'common/core/data-structure' },
      { name: 'core/component/composer',     path: 'common/domain/schema/composer/component' },
      { name: 'core/component/select-input', path: 'common/domain/schema/composer/select-input' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer            = core.locate('core/schema/composer')
        selectInputComposer = core.locate('core/select-input/composer')
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
