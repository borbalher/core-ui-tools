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
    bus        = this.locator.locate('core/bus'),
    repository = this.locator.locate('infrastructure/ui/repository')

    return new LogoutComponent(ui, bus, repository)
  }
}

module.exports = LogoutComponentLocator
