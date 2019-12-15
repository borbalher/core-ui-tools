const JWT  = require('.')

/**
 * @imeplements {@superhero/core/locator/constituent}
 */
class JWTLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {JWT}
   */
  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('core.jwt')

    return new JWT({
      cookieManager : this.locator.locate('core/cookie-manager'),
      base64        : this.locator.locate('core/base64'),
      bus           : this.locator.locate('core/bus'),
      options
    })
  }
}

module.exports = JWTLocator
