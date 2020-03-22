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
    ui                 = this.locator.locate('core/ui'),
    bus                = this.locator.locate('core/bus'),
    sessionInactivator = this.locator.locate('infrastructure/ui/session/inactivator')

    return new LogoutComponent(ui, bus, sessionInactivator)
  }
}

module.exports = LogoutComponentLocator
