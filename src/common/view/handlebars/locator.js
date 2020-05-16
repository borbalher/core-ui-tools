const
CoreHandlebars = require('.'),
handlebars     = require('handlebars/runtime')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebars}
   */
  locate()
  {
    return new CoreHandlebars(handlebars)
  }
}

module.exports = CoreHandlebarsLocator
