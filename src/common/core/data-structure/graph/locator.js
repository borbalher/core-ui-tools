const GraphFactory = require('./factory')

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
    const object = this.locator.locate('core/object')
    return new GraphFactory(object)
  }
}

module.exports = GraphLocator
