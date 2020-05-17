describe('src/common/ui/composer/component', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer

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
      { name: 'common/ui/aggregate/component' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer = core.locate('ui/component/composer')
        done()
      })
    })
  })

  it('Can compose a component', () =>
  {
    const component = composer.compose({
      // renderonchange = true,
      // bindings       = [],
      // listeners      = [],
      // parentId       = null,
      template : 'component',
      classes  : 'my-class',
      schema   : 'entity/component',
      name     : 'myComponent',
      id       : 'component'
    })

    expect(() =>
    {
      composer.compose('entity/component', component)
    }).to.not.throw()
  })
})
