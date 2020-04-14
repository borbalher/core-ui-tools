const Alert  = require('.')

/**
 * @imeplements {@superhero/core/locator/constituent}
 */
class AlertLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {Alert}
   */
  locate()
  {
    return new Alert()
  }
}

module.exports = AlertLocator
