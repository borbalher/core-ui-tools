describe('src/common/ui/composer/number-input-group', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  numberInputGroupComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'common/core/dictionary' },
      { name: 'common/core/schema' },
      { name: 'common/ui/composer' }
    ])

    core.load().then(() =>
    {
      composer                 = core.locate('core/schema/composer')
      numberInputGroupComposer = core.locate('ui/number-input-group/composer')
      done()
    })
  })

  it('Can compose a number input group', () =>
  {
    const numberInputGroup = numberInputGroupComposer.compose({
      attribute : 'number',
      disabled  : true,
      readonly  : true,
      required  : true,
      min       : '1',
      max       : '10',
      title     : 'Number input title',
      value     : '42',
      name      : 'number',
      id        : 'number-input-group'
    })

    expect(() =>
    {
      composer.compose('entity/number-input-group', numberInputGroup)
    }).to.not.throw()
  })
})
