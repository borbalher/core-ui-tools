const JSONToTreeFactory = require('./factory')

class JSONToTreeFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const composer = this.locator.locate('core/schema/composer')
    return new JSONToTreeFactory(composer)
  }
}

module.exports = JSONToTreeFactoryLocator
