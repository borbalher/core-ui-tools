const StackFactory  = require('./factory')

class StackFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {StackFactory}
   */
  locate()
  {
    return new StackFactory()
  }
}

module.exports = StackFactoryLocator
