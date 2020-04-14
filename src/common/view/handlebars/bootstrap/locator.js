const CoreHandlebarsBootstrap = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsBootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsBootstrap}
   */
  locate()
  {
    return new CoreHandlebarsBootstrap(this.locator)
  }
}

module.exports = CoreHandlebarsBootstrapLocator
