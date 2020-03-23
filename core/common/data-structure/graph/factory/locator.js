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
    edgeValidator = this.locator.locate('core/schema/validator/edge')

    return new GraphFactory(composer, nodeValidator, edgeValidator)
  }
}

module.exports = GraphLocator
