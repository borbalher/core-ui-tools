class ActionComposer
{
  /**
   * Creates an action
   * @param {string} name - Action name
   * @param {Object} data - Action payload
   * @param {Object} meta - Action meta
   * @returns {Action} event
   */
  compose(name, data, meta = {})
  {
    return  {
      meta : {
        ...meta,
        timestamp : new Date().toISOString(),
        name
      },
      data
    }
  }
}

module.exports = ActionComposer
