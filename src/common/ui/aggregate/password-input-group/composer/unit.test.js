describe('src/common/ui/composer/password-input-group', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  passwordInputGroupComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'common/core/bootstrap' },
      { name: 'common/core/object' },
      { name: 'common/core/schema' },
      { name: 'node/core/schema/bootstrap' },
      { name: 'common/core/data-structure' },
      { name: 'common/ui/aggregate/component' },
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
      { name: 'common/ui/aggregate/password-input' },
      { name: 'common/ui/aggregate/password-input-group' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer                   = core.locate('core/schema/composer')
        passwordInputGroupComposer = core.locate('ui/password-input-group/composer')
        done()
      })
    })
  })

  it('Can compose a password input group', () =>
  {
    const
    passwordInputGroup = passwordInputGroupComposer.compose({
      attribute : 'password',
      disabled  : true,
      parentId  : null,
      readonly  : true,
      required  : true,
      title     : 'Password input title',
      value     : 'My password value',
      name      : 'password',
      id        : 'password-input-group'
    })

    expect(() =>
    {
      composer.compose('entity/password-input-group', passwordInputGroup)
    }).to.not.throw()
  })
})
