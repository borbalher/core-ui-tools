const Preact = require('.')
/**
 * @implements {superhero/core/locator/constituent}
 */
class PreactLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {Preact}
   */
  locate()
  {
    const components = this.locator.locate('core/configuration').find('view.preact.components')

    return new Preact({
      components,
    })
  }
}

module.exports = PreactLocator
