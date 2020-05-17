describe('src/common/ui/composer/modal', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  modalComposer,
  componentComposer

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
      { name: 'common/core/normalizer' },
      { name: 'common/core/reducer' },
      { name: 'common/core/page' },
      { name: 'common/core/data-structure' },
      { name: 'common/infrastructure/controller' },
      { name: 'common/ui/aggregate/test' },
      { name: 'common/ui/aggregate/component' },
      { name: 'common/ui/aggregate/modal' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer          = core.locate('core/schema/composer')
        componentComposer = core.locate('ui/component/composer')
        modalComposer     = core.locate('ui/modal/composer')
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
