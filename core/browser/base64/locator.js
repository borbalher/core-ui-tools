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
    const base64 = require('js-base64').Base64
    return base64
  }
}

module.exports = Base64Locator
