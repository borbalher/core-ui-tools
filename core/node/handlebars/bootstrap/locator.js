const HandlebarsBootstrap = require('.')

class HandlebarsBootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new HandlebarsBootstrap(this.locator)
  }
}

module.exports = HandlebarsBootstrapLocator
