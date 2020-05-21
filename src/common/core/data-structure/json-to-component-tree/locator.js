const JSONToComponentTree = require('.')

class JSONToComponentTreeLocator
{
  locate()
  {
    const composer = this.locator.locate('core/schema/composer')
    return new JSONToComponentTree(composer)
  }
}

module.exports = JSONToComponentTreeLocator
