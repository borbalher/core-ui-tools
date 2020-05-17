describe('src/common/domain/schema/composer/password-input', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  passwordInputComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'core/bootstrap',                path: 'common/core/bootstrap' },
      { name: 'core/object',                   path: 'common/core/object' },
      { name: 'core/schema',                   path: 'common/core/schema' },
      { name: 'domain/schema',                 path: 'common/domain/schema' },
      { name: 'core/schema/bootstrap',         path: 'node/core/schema/bootstrap' },
      { name: 'core/data-structure',           path: 'common/core/data-structure' },
      { name: 'core/component/composer',       path: 'common/domain/schema/composer/component' },
      { name: 'core/component/password-input', path: 'common/domain/schema/composer/password-input' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer              = core.locate('core/schema/composer')
        passwordInputComposer = core.locate('core/password-input/composer')
        done()
      })
    })
  })

  it('Can compose a password input', () =>
  {
    const passwordInput  = passwordInputComposer.compose({
      attribute : 'password',
      disabled  : true,
      parentId  : null,
      readonly  : true,
      required  : true,
      title     : 'Password input title',
      value     : 'value',
      name      : 'password',
      id        : 'password-input'
    })

    expect(() =>
    {
      composer.compose('entity/password-input', passwordInput)
    }).to.not.throw()
  })
})
