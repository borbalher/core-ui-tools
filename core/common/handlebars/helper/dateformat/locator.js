const
CoreHandlebarsHelperDateformat  = require('.'),
dateformat                      = require('dateformat')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperDateformatLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperDateformat}
   */
  locate()
  {
    return new CoreHandlebarsHelperDateformat(dateformat)
  }
}

module.exports = CoreHandlebarsHelperDateformatLocator
