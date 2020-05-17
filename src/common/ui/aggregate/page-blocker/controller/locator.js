const PageBlockerController = require('.')

class PageBlockerControllerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return PageBlockerController
  }
}

module.exports = PageBlockerControllerLocator
