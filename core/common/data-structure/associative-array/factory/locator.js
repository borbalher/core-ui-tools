const AssociativeArrayFactory = require('.')


class AssociativeArrayFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {AssociativeArrayFactory}
   */
  locate()
  {
    return new AssociativeArrayFactory()
  }
}

module.exports = AssociativeArrayFactoryLocator
