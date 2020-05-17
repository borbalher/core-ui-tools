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
      { name: 'common/ui/aggregate/textarea-input' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer              = core.locate('core/schema/composer')
        textareaInputComposer = core.locate('ui/textarea-input/composer')
        done()
      })
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
