const LogoutComponent = require('.')

class LogoutComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    dom                = this.locator.locate('core/dom'),
    bus                = this.locator.locate('core/bus'),
    sessionInactivator = this.locator.locate('infrastructure/ui/session/inactivator')

    return new LogoutComponent(dom, bus, sessionInactivator)
  }
}

module.exports = LogoutComponentLocator
