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
    deepassign = this.locator.locate('core/deepassign'),
    object     = this.locator.locate('core/object')
    return new TreeFactory(object, deepassign)
  }
}

module.exports = TreeFactoryLocator
