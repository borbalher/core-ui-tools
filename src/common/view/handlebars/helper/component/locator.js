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
    const templateFactory = this.locator.locate('view/template/factory')

    return new HandlebarsHelperComponent({ templateFactory })
  }
}

module.exports = HandlebarsHelperComponentLocator
