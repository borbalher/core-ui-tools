const RedirectAction = require('.')

class RedirectActionLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new RedirectAction()
  }
}

module.exports = RedirectActionLocator
