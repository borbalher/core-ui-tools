describe('src/common/domain/schema/composer/component', () =>
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
      { name: 'core/bootstrap',          path: 'common/core/bootstrap' },
      { name: 'core/object',             path: 'common/core/object' },
      { name: 'core/schema',             path: 'common/core/schema' },
      { name: 'core/schema/bootstrap',   path: 'node/core/schema/bootstrap' },
      { name: 'core/data-structure',     path: 'common/core/data-structure' },
      { name: 'core/component/composer', path: 'common/domain/schema/composer/component' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer = core.locate('core/component/composer')
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
