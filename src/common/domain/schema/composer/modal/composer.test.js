describe('src/common/domain/schema/composer/modal', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../../../../../node/core/factory')

  let
  core,
  composer,
  modalComposer,
  componentComposer

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
      { name: 'core/component/modal',    path: 'common/domain/schema/composer/modal' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer          = core.locate('core/schema/composer')
        componentComposer = core.locate('core/component/composer')
        modalComposer     = core.locate('core/modal/composer')
        done()
      })
    })
  })

  it('Can compose a modal', () =>
  {
    const modal = modalComposer.compose({
      headerText : 'Header',
      isOpen     : false,
      name       : 'modal',
      body       : componentComposer.compose({
        template : 'component',
        schema   : 'entity/component'
      }),
      id : 'modal'
    })

    expect(() =>
    {
      composer.compose('entity/modal', modal)
    }).to.not.throw()
  })
})
