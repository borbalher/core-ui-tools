const MultipleAssociativeArrayFactory = require('.')

class MultipleAssociativeArrayFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {MultipleAssociativeArrayFactory}
   */
  locate()
  {
    return new MultipleAssociativeArrayFactory()
  }
}

module.exports = MultipleAssociativeArrayFactoryLocator
