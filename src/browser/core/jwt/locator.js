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
    cookies       = this.locator.locate('infrastructure/cookies'),
    base64        = this.locator.locate('core/base64')

    return new JWT(cookies, base64, options)
  }
}

module.exports = JWTLocator
