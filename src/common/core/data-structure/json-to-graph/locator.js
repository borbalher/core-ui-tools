const JSONToGraphFactory = require('./factory')

class JSONToGraphFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const composer = this.locator.locate('core/schema/composer')
    return new JSONToGraphFactory(composer)
  }
}

module.exports = JSONToGraphFactoryLocator
