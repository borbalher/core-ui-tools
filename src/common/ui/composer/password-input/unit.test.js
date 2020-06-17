describe('src/common/ui/composer/password-input', () =>
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
      { name: 'common/core/schema' },
      { name: 'common/ui/aggregate/component/composer' },
      { name: 'common/ui/aggregate/password-input/composer' }
    ])

    core.load().then(() =>
    {
      composer              = core.locate('core/schema/composer')
      passwordInputComposer = core.locate('ui/password-input/composer')
      done()
    })
  })

  it('Can compose a password input', () =>
  {
    const passwordInput  = passwordInputComposer.compose({
      attribute : 'password',
      disabled  : true,
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
