const MultipleAssociativeArray = require('../data-structure/multiple-associative-array')

/**
 * EventEmitter class
 * @class
 */
class EventEmitter
{
  /**
   * Creates a basic EventEmitter
   */
  constructor(id, console)
  {
    this[Symbol.for('id')]  = id
    this.console            = console
    this.listeners          = new MultipleAssociativeArray()
    this.warnings           = []
  }

  /**
   * Adds a listener to an event
   * @param {string} event - Event name
   * @param {function} listener - Listener function
   * @returns {function} - Returns its remove function
   */
  on(eventName, listener)
  {
    this.listeners.setItem(eventName, listener)

    return () =>
    {
      this.removeListener(eventName, listener)
    }
  }

  /**
   * Adds a listener to all events
   * @param {function} listener - Observer function
   * @returns {function} - Returns its remove function
   */
  onAll(listener)
  {
    return this.on('*', listener)
  }

  /**
   * Removes the listener function for the specified event name
   * @param {string} eventName - Event name
   * @param {function} listener - Listener function
   */
  removeListener(eventName, listener)
  {
    this.listeners.removeElement(eventName, listener)
  }

  /**
   * Removes all listeners functions for the specified event name.
   * @param {string} eventName - Event name
   */
  removeAllListeners(eventName)
  {
    this.listeners.removeItem(eventName)
  }

  /**
   * Checks if an event has listeners
   * @param {string} eventName - Event name
   * @returns {boolean} - Flag indicating if the event has listeners
   */
  hasListeners(eventName)
  {
    return this.listeners.hasElements(eventName)
  }

  /**
   * Creates an event
   * @param {string} name - Event name
   * @param {Object} data - Event payload
   * @returns {Event} event
   */
  createEvent(name, data, meta)
  {
    const
    timestamp = new Date().toISOString(),
    emitter   = this[Symbol.for('id')]

    return {
      meta :
      {
        timestamp,
        emitter,
        name,
        ...meta
      },
      data
    }
  }

  clear()
  {
    this.listeners.clear()
  }

  /**
   * Publish an event
   * @param {string} eventName - Event name
   * @param {Object} data - Event data
   * @returns {boolean} - Flag indicating if the event has listeners
   */
  async emit(eventName, data)
  {
    console.log(this[Symbol.for('id')], eventName, data)

    const
    event             = this.createEvent(eventName, data),
    globalListeners   = this.listeners.getItem('*') || [],
    eventListeners    = this.listeners.getItem(eventName) || [],
    listeners         = globalListeners.concat(eventListeners)

    if(listeners.length === 0 && !this.warnings.includes(eventName))
    {
      this.warnings.push(eventName)
      this.console.warning(`event: "${eventName}" does not have a defined listener in channel ${this[Symbol.for('id')]}`)
    }

    await this.executeListeners(listeners, event)
  }

  listenerCount(eventName)
  {
    const listeners = this.listeners.getItem(eventName) || []
    return listeners.length
  }

  /**
   * Executes the listeners of the specified event
   * @param {function} listener - listener
   * @param {Event} event - Event
   */
  async executeListeners(listeners, event)
  {
    return Promise.all(listeners.map(this.executeListener.bind(this, event)))
  }

  /**
   * Executes the listener with the event
   * @param {function} listener - listener
   * @param {Event} event - Event
   */
  async executeListener(event, listener)
  {
    return listener.call(this, event)
  }

  /**
   * Adds a listener to an event that only executes once
   * @param {string} event - Event name
   * @param {function} listener - Listener function
   */
  once(event, listener)
  {
    const remove = this.on(
      event,
      (...args) =>
      {
        remove()
        listener.call(this, args)
      }
    )
  }

  get [Symbol.toStringTag]()
  {
    return 'EventEmitter'
  }
}

module.exports = EventEmitter
