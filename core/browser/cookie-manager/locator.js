const CookieManager  = require('.')

/**
 * @imeplements {@superhero/core/locator/constituent}
 */
class CookieManagerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CookieManager}
   */
  locate()
  {
    return new CookieManager()
  }
}

module.exports = CookieManagerLocator
