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
    const
    multipleAssociativeArrayFactory = this.locator.locate('data-structure/multiple-associative-array'),
    associativeArrayFactory         = this.locator.locate('data-structure/associative-array'),
    queueFactory                    = this.locator.locate('data-structure/queue'),
    composer                        = this.locator.locate('core/schema/composer')

    return new GraphFactory(multipleAssociativeArrayFactory, associativeArrayFactory, queueFactory, composer)
  }
}

module.exports = GraphLocator
