describe('src/common/ui/composer/select-input-group', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  selectInputGroupComposer

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
      selectInputGroupComposer = core.locate('ui/select-input-group/composer')
      done()
    })
  })

  it('Can compose a select input group', () =>
  {
    const selectInputGroup = selectInputGroupComposer.compose({
      attribute : 'addressId',
      disabled  : true,
      readonly  : true,
      required  : true,
      items     : [{ id: 1, name: 'address' }],
      title     : 'Select input title',
      value     : [],
      name      : 'select',
      id        : 'select-input-group'
    })

    expect(() =>
    {
      composer.compose('entity/select-input-group', selectInputGroup)
    }).to.not.throw()
  })
})
