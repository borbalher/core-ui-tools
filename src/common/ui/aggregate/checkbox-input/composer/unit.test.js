describe('src/common/ui/composer/checkbox-input', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  checkboxInputComposer

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
      { name: 'common/ui/aggregate/checkbox-input' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer              = core.locate('core/schema/composer')
        checkboxInputComposer = core.locate('ui/checkbox-input/composer')
        done()
      })
    })
  })

  it('Can compose a checkbox input', () =>
  {
    const checkboxInput = checkboxInputComposer.compose({
      attribute : 'checkbox',
      disabled  : true,
      parentId  : null,
      readonly  : true,
      required  : true,
      title     : 'Checkbox input title',
      value     : true,
      name      : 'checkbox',
      id        : 'checkbox-input'
    })

    expect(() =>
    {
      composer.compose('entity/checkbox-input', checkboxInput)
    }).to.not.throw()
  })
})
