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
      { name: 'common/core/schema' },
      { name: 'common/ui/aggregate/component/composer' }
    ])

    core.load().then(() =>
    {
      composer = core.locate('ui/component/composer')
      done()
    })
  })

  it('Can compose a component', () =>
  {
    const component = composer.compose({
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
