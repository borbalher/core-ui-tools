describe('src/common/ui/composer/password-input-group', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('server/core/factory')

  let
  core,
  composer,
  passwordInputGroupComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'server/core/dictionary' },
      { name: 'common/core/schema' },
      { name: 'common/ui/composer' }
    ])

    core.load().then(() =>
    {
      composer                   = core.locate('core/schema/composer')
      passwordInputGroupComposer = core.locate('ui/password-input-group/composer')
      done()
    })
  })

  it('Can compose a password input group', () =>
  {
    const
    passwordInputGroup = passwordInputGroupComposer.compose({
      attribute : 'password',
      disabled  : true,
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
