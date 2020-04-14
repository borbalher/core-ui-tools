const MultipleAssociativeArrayFactory = require('./factory')

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
    const object = this.locator.locate('core/object')
    return new MultipleAssociativeArrayFactory(object)
  }
}

module.exports = MultipleAssociativeArrayFactoryLocator
