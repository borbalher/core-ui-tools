const CoreHandlebarsHelperDefault  = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperDefaultLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperDefault}
   */
  locate()
  {
    return new CoreHandlebarsHelperDefault()
  }
}

module.exports = CoreHandlebarsHelperDefaultLocator
