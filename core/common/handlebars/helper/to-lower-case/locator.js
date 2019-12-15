const CoreHandlebarsHelperToLowerCase = require('.')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperToLowerCaseLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperToLowerCase}
   */
  locate()
  {
    return new CoreHandlebarsHelperToLowerCase()
  }
}

module.exports = CoreHandlebarsHelperToLowerCaseLocator
