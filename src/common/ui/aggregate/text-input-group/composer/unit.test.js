describe('src/common/ui/composer/text-input-group', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  textInputGroupComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'common/core/bootstrap' },
      { name: 'common/core/object' },
      { name: 'common/core/schema' },
      { name: 'node/core/schema/bootstrap' },
      { name: 'common/core/data-structure' },
      { name: 'common/ui/aggregate/component' },
      { name: 'common/ui/aggregate/text-input' },
      { name: 'common/ui/aggregate/text-input-group' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer               = core.locate('core/schema/composer')
        textInputGroupComposer = core.locate('ui/text-input-group/composer')
        done()
      })
    })
  })

  it('Can compose a text input group', () =>
  {
    const textInputGroup = textInputGroupComposer.compose({
      attribute : 'text',
      disabled  : true,
      parentId  : null,
      readonly  : true,
      required  : true,
      title     : 'Text input title',
      value     : 'My text value',
      name      : 'text',
      id        : 'text-input-group'
    })

    expect(() =>
    {
      composer.compose('entity/text-input-group', textInputGroup)
    }).to.not.throw()
  })
})
