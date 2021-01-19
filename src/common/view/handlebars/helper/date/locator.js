const CoreHandlebarsHelperDate = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperDateLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperDate}
   */
  locate()
  {
    const moment = this.locator.locate('core/moment')

    return new CoreHandlebarsHelperDate(moment)
  }
}

module.exports = CoreHandlebarsHelperDateLocator
