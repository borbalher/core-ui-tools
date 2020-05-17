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
      { name: 'common/infrastructure/controller' },
      { name: 'common/ui/aggregate/test' },
      { name: 'common/ui/aggregate/component' },
      { name: 'common/ui/aggregate/checkbox-input' },
      { name: 'common/ui/aggregate/checkbox-input-group' },
      { name: 'common/ui/aggregate/toggeable-panel' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer               = core.locate('core/schema/composer')
        toggeablePanelComposer = core.locate('ui/toggeable-panel/composer')
        done()
      })
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
