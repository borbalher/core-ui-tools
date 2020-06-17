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
      { name: 'common/core/schema' },
      { name: 'common/ui/aggregate/component/composer' },
      { name: 'common/ui/aggregate/modal/composer' }
    ])

    core.load().then(() =>
    {
      composer          = core.locate('core/schema/composer')
      componentComposer = core.locate('ui/component/composer')
      modalComposer     = core.locate('ui/modal/composer')
      done()
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
