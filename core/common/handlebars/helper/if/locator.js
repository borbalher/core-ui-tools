const CoreHandlebarsHelperIf = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperIfLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperIf}
   */
  locate()
  {
    return new CoreHandlebarsHelperIf()
  }
}

module.exports = CoreHandlebarsHelperIfLocator
