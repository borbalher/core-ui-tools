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
    composer                        = this.locator.locate('core/schema/composer'),
    deepassign                      = this.locator.locate('core/deepassign')


    return new TreeFactory(composer, deepassign)
  }
}

module.exports = TreeFactoryLocator
