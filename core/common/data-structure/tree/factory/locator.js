const TreeFactory = require('.')

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
    deepassign    = this.locator.locate('core/deepassign'),
    composer      = this.locator.locate('core/schema/composer'),
    nodeValidator = this.locator.locate('core/schema/validator/node'),
    edgeValidator = this.locator.locate('core/schema/validator/edge')

    return new TreeFactory(composer, nodeValidator, edgeValidator, deepassign)
  }
}

module.exports = TreeFactoryLocator
