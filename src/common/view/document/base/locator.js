const Base = require('.')

class BaseLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const { html } = require('htm/preact')

    return new Base({ html })
  }
}

module.exports = BaseLocator
