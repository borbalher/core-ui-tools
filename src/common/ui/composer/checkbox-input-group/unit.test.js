describe('src/common/ui/composer/checkbox-input-group', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  checkboxInputGroupComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'node/core/dictionary' },
      { name: 'common/core/schema' },
      { name: 'common/ui/composer' }
    ])

    core.load().then(() =>
    {
      composer                   = core.locate('core/schema/composer')
      checkboxInputGroupComposer = core.locate('ui/composer/checkbox-input-group')
      done()
    })
  })

  it('Can compose a checkbox input group', () =>
  {
    const
    checkboxInputGroup = checkboxInputGroupComposer.compose({
      attribute : 'checkbox',
      disabled  : true,
      readonly  : true,
      required  : true,
      title     : 'Text input title',
      value     : true,
      name      : 'checkbox',
      id        : 'checkbox-input-group'
    })

    expect(() =>
    {
      composer.compose('entity/checkbox-input-group', checkboxInputGroup)
    }).to.not.throw()
  })
})
