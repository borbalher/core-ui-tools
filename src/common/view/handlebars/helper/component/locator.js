const HandlebarsHelperComponent = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class HandlebarsHelperComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {HandlebarsHelperComponent}
   */
  locate()
  {
    const locator = this.locator

    return new HandlebarsHelperComponent(locator)
  }
}

module.exports = HandlebarsHelperComponentLocator
