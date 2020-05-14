describe('src/common/domain/schema/composer/password-input-group', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../../../../../node/core/factory')

  let
  core,
  composer,
  passwordInputGroupComposer

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
      { name: 'core/component/password-input',       path: 'common/domain/schema/composer/password-input' },
      { name: 'core/component/password-input-group', path: 'common/domain/schema/composer/password-input-group' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer               = core.locate('core/schema/composer')
        passwordInputGroupComposer = core.locate('core/password-input-group/composer')
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
