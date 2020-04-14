const Cookies  = require('.')

/**
 * @implements {@superhero/core/locator/constituent}
 */
class CookiesLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {Cookies}
   */
  locate()
  {
    return new Cookies()
  }
}

module.exports = CookiesLocator
