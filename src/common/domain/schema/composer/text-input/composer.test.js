describe('src/common/domain/schema/composer/text-input', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../../../../../node/core/factory')

  let
  core,
  composer,
  textInputComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'core/bootstrap',            path: 'common/core/bootstrap' },
      { name: 'core/object',               path: 'common/core/object' },
      { name: 'core/schema',               path: 'common/core/schema' },
      { name: 'domain/schema',             path: 'common/domain/schema' },
      { name: 'core/schema/bootstrap',     path: 'node/core/schema/bootstrap' },
      { name: 'core/data-structure',       path: 'common/core/data-structure' },
      { name: 'core/component/composer',   path: 'common/domain/schema/composer/component' },
      { name: 'core/component/text-input', path: 'common/domain/schema/composer/text-input' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer          = core.locate('core/schema/composer')
        textInputComposer = core.locate('core/text-input/composer')
        done()
      })
    })
  })

  it('Can compose a text input', () =>
  {
    const textInput = textInputComposer.compose({
      attribute : 'text',
      disabled  : true,
      parentId  : null,
      readonly  : true,
      required  : true,
      title     : 'Text input title',
      value     : 'value',
      name      : 'text',
      id        : 'text-input'
    })

    expect(() =>
    {
      composer.compose('entity/text-input', textInput)
    }).to.not.throw()
  })
})
