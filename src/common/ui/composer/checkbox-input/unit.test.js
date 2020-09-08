describe('src/common/ui/composer/checkbox-input', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  checkboxInputComposer

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
      composer              = core.locate('core/schema/composer')
      checkboxInputComposer = core.locate('ui/checkbox-input/composer')
      done()
    })
  })

  it('Can compose a checkbox input', () =>
  {
    const checkboxInput = checkboxInputComposer.compose({
      attribute : 'checkbox',
      disabled  : true,
      readonly  : true,
      required  : true,
      title     : 'Checkbox input title',
      value     : true,
      name      : 'checkbox',
      id        : 'checkbox-input'
    })

    expect(() =>
    {
      composer.compose('entity/checkbox-input', checkboxInput)
    }).to.not.throw()
  })
})
