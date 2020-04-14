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
    ui         = this.locator.locate('core/ui'),
    bus        = this.locator.locate('infrastructure/bus'),
    repository = this.locator.locate('infrastructure/sys02-rebuild/repository')

    return new LogoutComponent(ui, bus, repository)
  }
}

module.exports = LogoutComponentLocator
