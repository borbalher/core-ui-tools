const CoreHandlebarsHelperToFixed = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperToFixedLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperToFixed}
   */
  locate()
  {
    return new CoreHandlebarsHelperToFixed()
  }
}

module.exports = CoreHandlebarsHelperToFixedLocator
