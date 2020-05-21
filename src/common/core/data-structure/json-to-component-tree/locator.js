const JSONToComponentTree = require('.')

class JSONToComponentTreeLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const composer = this.locator.locate('core/schema/composer')
    return new JSONToComponentTree(composer)
  }
}

module.exports = JSONToComponentTreeLocator
