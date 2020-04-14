const CoreHandlebarsHelperMath  = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperMathLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperMath}
   */
  locate()
  {
    return new CoreHandlebarsHelperMath()
  }
}

module.exports = CoreHandlebarsHelperMathLocator
