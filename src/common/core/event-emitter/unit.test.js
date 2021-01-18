describe('common/core/event-emitter/factory', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require(`node/core/factory`)

  let
  core,
  factory,
  eventComposer

  before(async (done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create({
      'common/core/bootstrap/config'      : require('common/core/bootstrap/config'),
      'common/core/listener/config'       : require('common/core/listener/config'),
      'schema/config'                     : require('schema/config'),
      'common/core/string/config'         : require('common/core/string/config'),
      'common/core/event/composer/config' : require('common/core/event/composer/config'),
      'common/core/data-structure/config' : require('common/core/data-structure/config'),
    })

    await core.locate('core/bootstrap').bootstrap()

    factory       = core.locate('core/event-emitter/factory')
    eventComposer = core.locate('core/event/composer')

    done()
  })

  it('Can create an event emitter', () =>
  {
    expect(() =>
    {
      factory.create('my-event-emitter')
    }).to.not.throw()
  })

  it('Must return false if eventName has no listeners', () =>
  {
    const
    eventEmitter  = factory.create('my-event-emitter'),
    hasListeners  = eventEmitter.hasListeners('EVENT_NAME')

    expect(hasListeners).to.be.equal(false)
  })

  it('Can subscribe to an event', () =>
  {
    const eventEmitter = factory.create('my-event-emitter')

    eventEmitter.on('EVENT_NAME', (payload) =>
    {
      console.log(payload)
    })

    const hasListeners = eventEmitter.hasListeners('EVENT_NAME')

    expect(hasListeners).to.be.equal(true)
  })

  it('Can subscribe to all events', () =>
  {
    const eventEmitter = factory.create('my-event-emitter')

    eventEmitter.onAll((payload) =>
    {
      console.log(payload)
    })

    const hasListeners = eventEmitter.hasListeners('*')

    expect(hasListeners).to.be.equal(true)
  })

  it('Can remove a listener function', () =>
  {
    const
    eventEmitter  = factory.create('my-event-emitter'),
    eventName     = 'EVENT_NAME',
    listener    = (payload) =>
    {
      console.log(payload)
    }

    eventEmitter.on(eventName, listener)

    eventEmitter.removeListener(eventName, listener)

    const hasListeners = eventEmitter.hasListeners(eventName)

    expect(hasListeners).to.be.equal(false)
  })


  it('Can get total listeners from an specific event', () =>
  {
    const
    eventEmitter  = factory.create('my-event-emitter'),
    eventName     = 'EVENT',
    listener      = (payload) =>
    {
      console.log(payload)
    }

    eventEmitter.on(eventName, listener)

    let totalListeners = eventEmitter.listenerCount(eventName)
    expect(totalListeners).to.be.equal(1)

    totalListeners = eventEmitter.listenerCount('ANOTHER_EVENT')

    expect(totalListeners).to.be.equal(0)
  })

  it('Unsubscribing a non existing listener should not throw an error', () =>
  {
    expect(() =>
    {
      const
      eventEmitter  = factory.create('my-event-emitter'),
      eventName     = 'EVENT_NAME',
      listener      = (payload) =>
      {
        console.log(payload)
      }

      eventEmitter.removeListener(eventName, listener)
    }).to.not.throw()
  })

  it('Can remove all listeners', () =>
  {
    const
    eventEmitter  = factory.create('my-event-emitter'),
    eventName     = 'EVENT_NAME',
    listener     = (payload) =>
    {
      console.log(payload)
    }

    eventEmitter.on(eventName, listener)

    eventEmitter.removeAllListeners(eventName)

    const hasListeners = eventEmitter.hasListeners(eventName)

    expect(hasListeners).to.be.equal(false)
  })

  it('Can clear all event listeners', () =>
  {
    const
    eventEmitter  = factory.create('my-event-emitter'),
    eventName     = 'EVENT_NAME',
    listener      = (payload) =>
    {
      console.log(payload)
    }

    eventEmitter.on(eventName, listener)

    eventEmitter.clear()

    expect(eventEmitter.listeners.length()).to.deep.equal(0)
  })

  it('Can get an eventName listeners', () =>
  {
    const
    eventEmitter  = factory.create('my-event-emitter'),
    eventName     = 'EVENT_NAME',
    listener      = (payload) =>
    {
      console.log(payload)
    }

    eventEmitter.on(eventName, listener)
    eventEmitter.on(eventName, listener)

    const listeners = eventEmitter.listeners.getItem(eventName)

    expect(listeners).to.deep.equal([listener, listener])
  })

  it('Can subscribe once to an event', async () =>
  {
    const
    eventEmitter  = factory.create('my-event-emitter'),
    eventName     = 'EVENT_NAME',
    event         = eventComposer.compose(eventName, {}),
    listener      = (payload) =>
    {
      return payload
    }

    eventEmitter.once(eventName, listener)

    await eventEmitter.emit(event)


    const hasListeners = eventEmitter.hasListeners(eventName)

    expect(hasListeners).to.be.equal(false)
  })

  it('Can emit an event (only eventName listeners)', async () =>
  {
    let counter = 0

    const
    eventEmitter  = factory.create('my-event-emitter'),
    eventName     = 'EVENT_NAME',
    event         = eventComposer.compose(eventName, { increment: 1 }),
    listener      = (emittedEvent) =>
    {
      const payload = emittedEvent.data
      counter += payload.increment
    }

    eventEmitter.on(eventName, listener)

    await eventEmitter.emit(event)

    expect(counter).to.be.equal(1)
  })

  it('Can emit an event (only global listeners)', async () =>
  {
    let counter = 0

    const
    eventEmitter  = factory.create('my-event-emitter'),
    eventName     = 'EVENT_NAME',
    event         = eventComposer.compose(eventName, { increment: 1 }),
    listener      = (emittedEvent) =>
    {
      const payload = emittedEvent.data
      counter += payload.increment
    }

    eventEmitter.onAll(listener)

    await eventEmitter.emit(event)

    expect(counter).to.be.equal(1)
  })

  it('Should return the proper string tag ', async () =>
  {
    const
    eventEmitter  = factory.create('my-event-emitter'),
    stringTag     = Object.prototype.toString.call(eventEmitter)

    expect(stringTag).to.deep.equal('[object EventEmitter]')
  })
})
