const LocalStorage  = require('.')

/**
 * @imeplements {@superhero/core/locator/constituent}
 */
class LocalStorageLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {LocalStorage}
   */
  locate()
  {
    const  localStorage = window.localStorage
    return new LocalStorage(localStorage)
  }
}

module.exports = LocalStorageLocator
