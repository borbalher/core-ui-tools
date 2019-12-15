const CoreHandlebarsHelperExists  = require('.')

/**
 * @extends {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperExistsLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperExists}
   */
  locate()
  {
    const isEqual = require('lodash.isequal')

    return new CoreHandlebarsHelperExists(isEqual)
  }
}

module.exports = CoreHandlebarsHelperExistsLocator
