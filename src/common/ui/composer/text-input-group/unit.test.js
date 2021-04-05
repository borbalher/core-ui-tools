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
      { name: 'node/core/dictionary' },
      { name: 'common/core/schema' },
      { name: 'common/ui/composer' }
    ])

    core.load().then(() =>
    {
      composer               = core.locate('core/schema/composer')
      textInputGroupComposer = core.locate('ui/composer/text-input-group')
      done()
    })
  })

  it('Can compose a text input group', () =>
  {
    const textInputGroup = textInputGroupComposer.compose({
      attribute : 'text',
      disabled  : true,
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
