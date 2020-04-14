const AssociativeArrayFactory = require('./factory')


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
