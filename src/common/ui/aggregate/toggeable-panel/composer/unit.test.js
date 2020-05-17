describe('src/common/domain/schema/composer/toggeable-panel', () =>
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
      { name: 'core/bootstrap',                      path: 'common/core/bootstrap' },
      { name: 'core/object',                         path: 'common/core/object' },
      { name: 'core/schema',                         path: 'common/core/schema' },
      { name: 'domain/schema',                       path: 'common/domain/schema' },
      { name: 'core/schema/bootstrap',               path: 'node/core/schema/bootstrap' },
      { name: 'core/data-structure',                 path: 'common/core/data-structure' },
      { name: 'core/component/composer',             path: 'common/domain/schema/composer/component' },
      { name: 'core/component/checkbox-input',       path: 'common/domain/schema/composer/checkbox-input' },
      { name: 'core/component/checkbox-input-group', path: 'common/domain/schema/composer/checkbox-input-group' },
      { name: 'core/component/toggeable-panel',      path: 'common/domain/schema/composer/toggeable-panel' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer               = core.locate('core/schema/composer')
        toggeablePanelComposer = core.locate('core/toggeable-panel/composer')
        done()
      })
    })
  })

  it('Can compose a toggeable panel', () =>
  {
    const
    componentComposer = core.locate('core/toggeable-panel/composer'),
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
