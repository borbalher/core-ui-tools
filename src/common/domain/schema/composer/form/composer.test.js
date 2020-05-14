describe('src/common/domain/schema/composer/form', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../../../../../node/core/factory')

  let
  core,
  composer,
  formComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'core/bootstrap',          path: 'common/core/bootstrap' },
      { name: 'core/object',             path: 'common/core/object' },
      { name: 'core/schema',             path: 'common/core/schema' },
      { name: 'domain/schema',           path: 'common/domain/schema' },
      { name: 'core/schema/bootstrap',   path: 'node/core/schema/bootstrap' },
      { name: 'core/data-structure',     path: 'common/core/data-structure' },
      { name: 'core/component/composer', path: 'common/domain/schema/composer/component' },
      { name: 'core/component/form',     path: 'common/domain/schema/composer/form' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer     = core.locate('core/schema/composer')
        formComposer = core.locate('core/form/composer')
        done()
      })
    })
  })

  it('Can compose a form', () =>
  {
    const { nodes: [form] }  = formComposer.compose({
      template : 'my-form',
      title    : 'Form title',
      name     : 'text',
      id       : 'form'
    })

    expect(() =>
    {
      composer.compose('entity/form', form)
    }).to.not.throw()
  })
})
