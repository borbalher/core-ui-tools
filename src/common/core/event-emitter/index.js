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
  constructor(id, console, maxListeners = 10)
  {
    this[Symbol.for('id')]  = id
    this.console            = console
    this.listeners          = new MultipleAssociativeArray()
    this.warnings           = []
    this.maxListeners       = maxListeners
  }

  /**
   * Returns an array listing the events for which the emitter has registered listeners. The values in the array are strings or Symbols
   * @returns {Array<string|Symbol>}
   */
  eventNames()
  {
    return this.listeners.toArray().keys || []
  }

  /**
   * Returns the current max listener value for the EventEmitter which is either set by emitter.setMaxListeners(n) or default (10).
   */
  getMaxListeners()
  {
    return this.maxListeners
  }

  /**
   * By default EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default that helps finding memory leaks. The emitter.setMaxListeners() method allows the limit to be modified for this specific EventEmitter instance. The value can be set to Infinity (or 0) to indicate an unlimited number of listeners.
   * @returns {EventEmitter}
   */
  setMaxListeners(maxListeners)
  {
    this.maxListeners = maxListeners
    return this
  }

  /**
   * Adds a listener to an event
   * @param {string} eventName - Event name
   * @param {function} listener - Listener function
   * @returns {EventEmitter}
   */
  on(eventName, listener)
  {
    this.listeners.setItem(eventName, listener)
    return this
  }

  /**
   * Returns a copy of the array of listeners for the event named eventName, including any wrappers (such as those created by .once()).
   * @param {string} eventName - Event name
   * @returns {Array<function>}
   */
  rawListeners(eventName)
  {
    return [...this.listeners.getItem(eventName)]
  }

  /**
   * Alias for on function
   * @param {string} event - Event name
   * @param {function} listener - Listener function
   * @returns {function} - Returns its remove function
   */
  addListener(eventName, listener)
  {
    return this.on(eventName, listener)
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
   * @returns {EventEmitter}
   */
  removeListener(eventName, listener)
  {
    this.listeners.removeElement(eventName, listener)
    return this
  }

  /**
   * Alias for removeListener
   * @param {string} eventName - Event name
   * @param {function} listener - Listener function
   * @returns {EventEmitter}
   */
  off(eventName, listener)
  {
    return this.removeListener(eventName, listener)
  }

  /**
   * Removes all listeners functions for the specified event name.
   * @param {string} eventName - Event name
   * @returns {EventEmitter}
   */
  removeAllListeners(eventName)
  {
    this.listeners.removeItem(eventName)
    return this
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

  clear()
  {
    this.listeners.clear()
  }

  /**
   * Publish an event
   * @param {event} event - Event
   * @returns {boolean} - Flag indicating if the event has listeners
   */
  async emit(event, ...args)
  {
    const
    { meta: { name } } = event,
    globalListeners    = this.listeners.getItem('*')  || [],
    eventListeners     = this.listeners.getItem(name) || [],
    listeners          = globalListeners.concat(eventListeners)

    if(listeners.length === 0 && !this.warnings.includes(name))
    {
      this.warnings.push(name)
      this.console.warning(`event: "${name}" does not have a defined listener in channel ${this[Symbol.for('id')]}`)
    }

    const promises = listeners.map((listener) =>
    {
      return listener.call(this, event, ...args)
    })

    return Promise.all(promises)
  }

  /**
   * Returns the number of listeners listening to the event named eventName
   * @param {event} eventName - Event
   * @returns {boolean} - Flag indicating if the event has listeners
   */
  listenerCount(eventName)
  {
    const listeners = this.listeners.getItem(eventName) || []
    return listeners.length
  }

  /**
   * Returns a copy of the array of listeners for the event named eventName
   * @param {event} eventName - Event name
   * @returns {Array<function>} - listeners
   */
  listeners(eventName)
  {
    return this.listeners.getItem(eventName) || []
  }

  // /**
  //  * Executes the listeners of the specified event
  //  * @param {function} listener - listener
  //  * @param {Event} event - Event
  //  */
  // async executeListeners(listeners, event, ...args)
  // {
  //   const promises = listeners.map((listener) =>
  //   {
  //     return listener.call(this, event, ...args)
  //   })

  //   return Promise.all(promises)
  // }


  /**
   * Adds a one-time listener function for the event named eventName to the beginning of the listeners array. The next time eventName is triggered, this listener is removed, and then invoked.
   * @param {string} eventName - Event name
   * @param {function} listener - Listener function
   * @returns {EventEmitter}
   */
  prependOnceListener(eventName, listener)
  {
    const
    callback = (...args) =>
    {
      this.removeListener(eventName, callback)
      listener.call(this, args)
    }

    this.on(eventName, callback)

    return this
  }

  /**
   * Adds the listener function to the beginning of the listeners array for the event named eventName.
   * No checks are made to see if the listener has already been added.
   * Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.
   * @param {string} eventName - Event name
   * @param {function} listener - Listener function
   * @returns {EventEmitter}
   */
  prependListener(eventName, listener)
  {
    this.listeners.setItem(eventName, listener, true)
    return this
  }


  /**
   * Adds a listener to an event that only executes once
   * @param {string} eventName - Event name
   * @param {function} listener - Listener function
   */
  once(eventName, listener)
  {
    const
    callback = (...args) =>
    {
      this.removeListener(eventName, callback)
      listener.call(this, args)
    }

    this.on(eventName, callback)

    return this
  }

  get [Symbol.toStringTag]()
  {
    return 'EventEmitter'
  }
}

module.exports = EventEmitter
