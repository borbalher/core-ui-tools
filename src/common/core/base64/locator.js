const Base64 = require('.')
/**
 * @imeplements {@superhero/core/locator/constituent}
 */
class Base64Locator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {Base64}
   */
  locate()
  {
    const
    base64     = require('js-base64').Base64,
    coreString = this.locator.locate('core/string')

    return new Base64(base64, coreString)
  }
}

module.exports = Base64Locator
