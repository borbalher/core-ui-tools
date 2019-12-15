const JWE  = require('.')

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
    return new JWE({
      base64        : this.locator.locate('core/base64'),
      authorization : this.locator.locate('core/authorization'),
      textDecoder   : this.locator.locate('core/text-decoder'),
      bus           : this.locator.locate('core/bus')
    })
  }
}

module.exports = JWELocator
