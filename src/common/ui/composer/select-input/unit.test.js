describe('src/common/ui/composer/select-input', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  selectInputComposer

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
      composer            = core.locate('core/schema/composer')
      selectInputComposer = core.locate('ui/select-input/composer')
      done()
    })
  })

  it('Can compose a select input', () =>
  {
    const selectInput = selectInputComposer.compose({
      attribute : 'addressId',
      disabled  : true,
      readonly  : true,
      required  : true,
      items     : [{ id: 1, name: 'address' }],
      title     : 'Select input title',
      value     : [],
      name      : 'select',
      id        : 'select-input'
    })

    expect(() =>
    {
      composer.compose('entity/select-input', selectInput)
    }).to.not.throw()
  })
})
