const CoreHandlebarsHelperCase  = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperCaseLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperCase}
   */
  locate()
  {
    return new CoreHandlebarsHelperCase()
  }
}

module.exports = CoreHandlebarsHelperCaseLocator
