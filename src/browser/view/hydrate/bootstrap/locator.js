const HydrateBootstrap = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class HydrateBootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {HydrateBootstrap}
   */
  locate()
  {
    return new HydrateBootstrap({ locator: this.locator })
  }
}

module.exports = HydrateBootstrapLocator
