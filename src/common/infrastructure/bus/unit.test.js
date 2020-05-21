describe('infrastructure/bus', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  bus

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'common/core/bootstrap' },
      { name: 'common/core/listener' },
      { name: 'common/core/schema' },
      { name: 'common/core/object' },
      { name: 'common/core/string' },
      { name: 'common/core/data-structure' },
      { name: 'common/infrastructure/bus' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        bus = core.locate('infrastructure/bus')
        done()
      })
    })
  })


  it('Can add a channel', () =>
  {
    const channelId  = 'my-custom-channel'

    bus.createChannel(channelId)

    const channel = bus.getChannel(channelId)

    expect(channel).to.not.be.equal(undefined)
  })

  it('Can remove a channel', () =>
  {
    const channelId = 'my-custom-channel'

    bus.createChannel(channelId)

    bus.deleteChannel(channelId)

    const channel = bus.channels.getItem(channelId)
    expect(channel).to.be.deep.equal(undefined)
  })


  it('Can emit into a channel', async () =>
  {
    const channelId   = 'my-custom-channel'

    bus.createChannel(channelId)

    let counter = 0

    const
    event     = 'EVENT_NAME',
    listener  = (eventEmmited) =>
    {
      const payload = eventEmmited.data
      counter += payload.increment
    }

    bus.on(channelId, event, listener)

    await bus.emit(channelId, event, { increment: 1 })

    expect(counter).to.be.equal(1)
  })

  it('Should throw E_SCHEMA_INVALID_ATTRIBUTE error when trying to emit an event with invalid name', async () =>
  {
    const channelId   = 'my-custom-channel'

    bus.createChannel(channelId)

    await bus.emit(channelId, { foo: 'bar' }, { increment: 1 })
      .catch((error) =>
      {
        expect(error.code).to.be.equals('E_SCHEMA_INVALID_ATTRIBUTE')
      })
  })

  it('Should return the proper string tag ', async () =>
  {
    const stringTag = Object.prototype.toString.call(bus)
    expect(stringTag).to.deep.equal('[object Bus]')
  })

  it('Can on once into a channel', async () =>
  {
    const channelId   = 'Can on once into a channel'

    bus.createChannel(channelId)

    const
    event     = 'EVENT_NAME',
    listener  = () => {}

    bus.once(channelId, event, listener)

    await bus.emit(channelId, event, { increment: 1 })

    const hasListeners = bus.getChannel(channelId).hasListeners(event)

    expect(hasListeners).to.be.equal(false)
  })

  it('Can on to all action from a channel', () =>
  {
    const channelId   = 'my-custom-channel'

    bus.createChannel(channelId)

    const listener = () => {}

    bus.onAll(channelId, listener)

    const hasListeners = bus.getChannel(channelId).hasListeners('*')

    expect(hasListeners).to.be.equal(true)
  })

  it('Can remove all listeners from an event in a specific channel', () =>
  {
    const channelId   = 'remove all listeners from an event'

    bus.createChannel(channelId)

    const
    event     = 'EVENT_NAME',
    listener  = () => {}

    bus.on(channelId, event, listener)

    bus.removeAllListeners(channelId, event)

    const hasListeners = bus.getChannel(channelId).hasListeners(event)

    expect(hasListeners).to.be.equal(false)
  })

  it('Can remove an listener from an event in a specific channel', () =>
  {
    const channelId   = 'remove an listener from an event'

    bus.createChannel(channelId)

    const
    event     = 'EVENT_NAME',
    listener  = () => {}

    bus.on(channelId, event, listener)
    bus.removeListener(channelId, event, listener)

    const hasListeners = bus.getChannel(channelId).hasListeners(event)
    expect(hasListeners).to.be.equal(false)
  })

  it('Can clear a channel', () =>
  {
    const channelId   = 'my-custom-channel'

    bus.createChannel(channelId)

    const
    event     = 'EVENT_NAME',
    listener  = () => {}

    bus.on(channelId, event, listener)
    bus.clear(channelId)

    const channel = bus.getChannel(channelId)

    expect(channel.listeners.length()).to.deep.equal(0)
  })
})
