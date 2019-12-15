const SessionStorage = require('.')

/**
 * @imeplements {@superhero/core/locator/constituent}
 */
class SessionStorageLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {SessionStorage}
   */
  locate()
  {
    const  sessionStorage = window.sessionStorage
    return new SessionStorage(sessionStorage)
  }
}

module.exports = SessionStorageLocator
