const PageBlockerComponent = require('.')

class PageBlockerComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return PageBlockerComponent
  }
}

module.exports = PageBlockerComponentLocator
