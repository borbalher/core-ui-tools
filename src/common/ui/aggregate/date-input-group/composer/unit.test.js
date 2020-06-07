describe('src/common/ui/composer/date-input-group', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  dateInputGroupComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'common/core/schema' },
      { name: 'common/core/moment' },
      { name: 'common/ui/aggregate/component/composer' },
      { name: 'common/ui/aggregate/error/composer' },
      { name: 'common/ui/aggregate/text-input/composer' },
      { name: 'common/ui/aggregate/date-input-group/composer' }
    ])

    core.load().then(() =>
    {
      composer               = core.locate('core/schema/composer')
      dateInputGroupComposer = core.locate('ui/date-input-group/composer')
      done()
    })
  })

  it('Can compose a date input group', () =>
  {
    const dateInputGroup = dateInputGroupComposer.compose({
      attribute : 'date',
      disabled  : true,
      readonly  : true,
      required  : true,
      locale    : 'es',
      title     : 'Date input title',
      value     : '25/02/1991',
      name      : 'dateInputGroup',
      id        : 'my-date-input-group'
    })

    expect(() =>
    {
      composer.compose('entity/date-input-group', dateInputGroup)
    }).to.not.throw()
  })
})
