describe('src/common/domain/schema/composer/textarea-input', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../../../../../node/core/factory')

  let
  core,
  composer,
  textareaInputComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'core/bootstrap',                path: 'common/core/bootstrap' },
      { name: 'core/object',                   path: 'common/core/object' },
      { name: 'core/schema',                   path: 'common/core/schema' },
      { name: 'domain/schema',                 path: 'common/domain/schema' },
      { name: 'core/schema/bootstrap',         path: 'node/core/schema/bootstrap' },
      { name: 'core/data-structure',           path: 'common/core/data-structure' },
      { name: 'core/component/composer',       path: 'common/domain/schema/composer/component' },
      { name: 'core/component/textarea-input', path: 'common/domain/schema/composer/textarea-input' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer              = core.locate('core/schema/composer')
        textareaInputComposer = core.locate('core/textarea-input/composer')
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
