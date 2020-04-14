const JWE = require('.')

/**
 * @imeplements {@superhero/core/locator/constituent}
 */
class JWELocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {JWE}
   */
  locate()
  {
    const
    crypto      = this.locator.locate('core/crypto'),
    rsaKeys     = this.locator.locate('infrastructure/rsa-keys/repository'),
    textDecoder = this.locator.locate('core/text-decoder'),
    base64      = this.locator.locate('core/base64'),
    jwt         = this.locator.locate('core/jwt')

    return new JWE(crypto, rsaKeys, textDecoder, base64, jwt)
  }
}

module.exports = JWELocator
