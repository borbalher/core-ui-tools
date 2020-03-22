const LogoutObserver = require('.')

class LogoutObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const logout = this.locator.locate('ui/logout')
    return new LogoutObserver(logout)
  }
}

module.exports = LogoutObserverLocator
