describe('src/common/ui/composer/toggeable-panel', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  toggeableFieldsetComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'common/core/schema' },
      { name: 'common/ui/aggregate/component/composer' },
      { name: 'common/ui/aggregate/checkbox-input/composer' },
      { name: 'common/ui/aggregate/checkbox-input-group/composer' },
      { name: 'common/ui/aggregate/toggeable-fieldset/composer' }
    ])

    core.load().then(() =>
    {
      composer               = core.locate('core/schema/composer')
      toggeableFieldsetComposer = core.locate('ui/toggeable-fieldset/composer')
      done()
    })
  })

  it('Can compose a toggeable panel', () =>
  {
    const
    componentComposer = core.locate('ui/component/composer'),
    toggeableFieldset    = toggeableFieldsetComposer.compose({
      panel : componentComposer.compose({
        template : 'component',
        classes  : 'my-class',
        schema   : 'entity/component',
        name     : 'myComponent',
        id       : 'component'
      }),
      schema   : 'entity/my-toggeable-fieldset',
      template : 'my-toggeable-fieldset',
      name     : 'fieldset',
      id       : 'fieldset'
    })

    expect(() =>
    {
      composer.compose('entity/toggeable-fieldset', toggeableFieldset)
    }).to.not.throw()
  })
})
