const CoreHandlebarsHelperToUpperCase = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperToUpperCaseLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperToUpperCase}
   */
  locate()
  {
    return new CoreHandlebarsHelperToUpperCase()
  }
}

module.exports = CoreHandlebarsHelperToUpperCaseLocator
