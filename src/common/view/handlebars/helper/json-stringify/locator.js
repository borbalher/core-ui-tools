const CoreHandlebarsHelperJsonStringify = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperJsonStringifyLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperJsonStringify}
   */
  locate()
  {
    return new CoreHandlebarsHelperJsonStringify()
  }
}

module.exports = CoreHandlebarsHelperJsonStringifyLocator
