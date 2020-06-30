const TreeFactory = require('./factory')

class TreeFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {TreeFactory}
   */
  locate()
  {
    const
    multipleAssociativeArrayFactory = this.locator.locate('data-structure/multiple-associative-array'),
    associativeArrayFactory         = this.locator.locate('data-structure/associative-array'),
    queueFactory                    = this.locator.locate('data-structure/queue'),
    composer                        = this.locator.locate('core/schema/composer'),
    deepassign                      = this.locator.locate('core/deepassign'),
    deepfind                        = this.locator.locate('core/deepfind')

    return new TreeFactory(multipleAssociativeArrayFactory, associativeArrayFactory, queueFactory, composer, deepassign, deepfind)
  }
}

module.exports = TreeFactoryLocator
