class EventComposer
{
  /**
   * Creates an event
   * @param {string} name - Event name
   * @param {Object} data - Event payload
   * @param {Object} meta - Event meta
   * @returns {Ation} event
   */
  compose(name, data, meta)
  {
    return {
      meta :
      {
        timestamp : new Date().toISOString(),
        name,
        ...meta
      },
      data
    }
  }
}

module.exports = EventComposer
