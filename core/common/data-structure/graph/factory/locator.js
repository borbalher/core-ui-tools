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
    const
    composer      = this.locator.locate('core/schema/composer'),
    nodeValidator = this.locator.locate('core/schema/validator/node'),
    edgeValidator = this.locator.locate('core/schema/validator/edge'),
    object        = this.locator.locate('core/object')

    return new GraphFactory(composer, nodeValidator, edgeValidator, object)
  }
}

module.exports = GraphLocator
