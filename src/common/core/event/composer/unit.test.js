describe('common/core/event/composer', () =>
{
  const
  chai           = require('chai'),
  expect         = chai.expect,
  chaiDateString = require('chai-date-string'),
  CoreFactory    = require(`server/core/factory`)

  chai.use(chaiDateString)

  let
  core,
  eventComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'common/core/event/composer' }
    ])

    core.load().then(() =>
    {
      eventComposer = core.locate('core/event/composer')
      done()
    })
  })

  it('Can compose an event', () =>
  {
    const
    meta =
    {
      emitter : 'my-event-emitter'
    },
    data =
    {
      foo : 'bar'
    },
    event = eventComposer.compose('EVENT', data, meta)

    expect(event.meta).to.have.all.keys('name', 'timestamp', 'emitter')
    expect(event.meta.name).to.be.equal('EVENT')
    expect(event.meta.emitter).to.be.equal('my-event-emitter')
    expect(event.meta.timestamp).to.be.a.dateString()
    expect(event.data).to.deep.equal(data)
  })

  it('Can compose an action without meta', () =>
  {
    const
    data =
    {
      foo : 'bar'
    },
    event = eventComposer.compose('EVENT', data)

    expect(event.meta).to.have.all.keys('name', 'timestamp')
    expect(event.meta.name).to.be.equal('EVENT')
    expect(event.meta.timestamp).to.be.a.dateString()
    expect(event.data).to.deep.equal(data)
  })
})
