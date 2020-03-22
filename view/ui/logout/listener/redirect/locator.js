const RedirectObserver = require('.')

class RedirectObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new RedirectObserver()
  }
}

module.exports = RedirectObserverLocator
