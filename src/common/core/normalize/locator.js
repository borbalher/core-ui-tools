const Normalize = require('.')

class NormalizeLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new Normalize()
  }
}

module.exports = NormalizeLocator
