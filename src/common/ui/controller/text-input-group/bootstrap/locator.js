const TextInputGroupBootstrap = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class TextInputGroupBootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {TextInputGroupBootstrap}
   */
  locate()
  {
    return new TextInputGroupBootstrap(this.locator)
  }
}

module.exports = TextInputGroupBootstrapLocator
