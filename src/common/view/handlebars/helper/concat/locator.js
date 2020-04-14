const CoreHandlebarsHelperConcat  = require('.')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperConcatLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperConcat}
   */
  locate()
  {
    return new CoreHandlebarsHelperConcat()
  }
}

module.exports = CoreHandlebarsHelperConcatLocator
