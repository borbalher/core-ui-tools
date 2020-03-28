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
    options       = configuration.find('core.jwt'),
    bus           = this.locator.locate('core/bus'),
    channel       = bus.createChannel('jwt')

    return new JWT({
      cookieManager : this.locator.locate('core/cookie-manager'),
      base64        : this.locator.locate('core/base64'),
      channel,
      options
    })
  }
}

module.exports = JWTLocator
