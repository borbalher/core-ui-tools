describe('src/common/ui/composer/toggeable-panel', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  toggeablePanelComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'common/core/schema' },
      { name: 'common/ui/aggregate/component/composer' },
      { name: 'common/ui/aggregate/checkbox-input/composer' },
      { name: 'common/ui/aggregate/checkbox-input-group/composer' },
      { name: 'common/ui/aggregate/toggeable-panel/composer' }
    ])

    core.load().then(() =>
    {
      composer               = core.locate('core/schema/composer')
      toggeablePanelComposer = core.locate('ui/toggeable-panel/composer')
      done()
    })
  })

  it('Can compose a toggeable panel', () =>
  {
    const
    componentComposer = core.locate('ui/component/composer'),
    toggeablePanel    = toggeablePanelComposer.compose({
      panel : componentComposer.compose({
        template : 'component',
        classes  : 'my-class',
        schema   : 'entity/component',
        name     : 'myComponent',
        id       : 'component'
      }),
      schema   : 'entity/my-toggeable-panel',
      template : 'my-toggeable-panel',
      name     : 'panel',
      id       : 'panel'
    })

    expect(() =>
    {
      composer.compose('entity/toggeable-panel', toggeablePanel)
    }).to.not.throw()
  })
})
