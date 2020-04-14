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
    edgeValidator = this.locator.locate('core/schema/validator/edge'),
    object        = this.locator.locate('core/object')

    return new TreeFactory(composer, nodeValidator, edgeValidator, object, deepassign)
  }
}

module.exports = TreeFactoryLocator
