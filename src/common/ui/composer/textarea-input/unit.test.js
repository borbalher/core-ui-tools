describe('src/common/ui/composer/textarea-input', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  textareaInputComposer

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
      composer              = core.locate('core/schema/composer')
      textareaInputComposer = core.locate('ui/textarea-input/composer')
      done()
    })
  })

  it('Can compose a text input', () =>
  {
    const textareaInput = textareaInputComposer.compose({
      placeholder : 'Notes',
      maxLength   : 1000,
      attribute   : 'notes',
      disabled    : true,
      readonly    : true,
      required    : true,
      columns     : 10,
      title       : 'Notes to be fulfilled',
      value       : 'My notes',
      name        : 'notes',
      rows        : 10,
      id          : 'my-textarea'
    })

    expect(() =>
    {
      composer.compose('entity/textarea-input', textareaInput)
    }).to.not.throw()
  })
})
