const Base = require('.')

class BaseLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { html } = require('htm/preact'),
    App      = this.locator.locate(`view/app`)
    return new Base({ html, App })
  }
}

module.exports = BaseLocator
