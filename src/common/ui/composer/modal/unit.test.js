describe('src/common/ui/composer/modal', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('server/core/factory')

  let
  core,
  composer,
  modalComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'server/core/dictionary' },
      { name: 'common/core/schema' },
      { name: 'common/ui/composer' }
    ])

    core.load().then(() =>
    {
      composer      = core.locate('core/schema/composer')
      modalComposer = core.locate('ui/modal/composer')
      done()
    })
  })

  it('Can compose a modal', () =>
  {
    const modal = modalComposer.compose({
      headerText : 'Header',
      isOpen     : false,
      name       : 'modal',
      template   : 'component',
      schema     : 'component',
      id         : 'modal'
    })

    expect(() =>
    {
      composer.compose('entity/modal', modal)
    }).to.not.throw()
  })
})
