const GraphFactory = require('.')

class GraphLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {Graph}
   */
  locate()
  {
    const composer = this.locator.locate('core/schema/composer')
    return new GraphFactory(composer)
  }
}

module.exports = GraphLocator
