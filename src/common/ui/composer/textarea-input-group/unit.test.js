describe('src/common/ui/composer/textarea-input-group', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  textareaInputGroupComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'common/core/dictionary' },
      { name: 'common/core/schema' },
      { name: 'common/ui/composer' }
    ])

    core.load().then(() =>
    {
      composer                   = core.locate('core/schema/composer')
      textareaInputGroupComposer = core.locate('ui/textarea-input-group/composer')
      done()
    })
  })

  it('Can compose a text input group', () =>
  {
    const textInputGroup = textareaInputGroupComposer.compose({
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
