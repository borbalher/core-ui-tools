const CoreHandlebarsHelperCalculate = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperCalculateLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperCalculate}
   */
  locate()
  {
    return new CoreHandlebarsHelperCalculate()
  }
}

module.exports = CoreHandlebarsHelperCalculateLocator
