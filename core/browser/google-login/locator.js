const GoogleLoginComponent = require('.')

class GoogleLoginComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    ui  = this.locator.locate('core/ui'),
    bus = this.locator.locate('infrastructure/bus')

    return new GoogleLoginComponent(ui, bus)
  }
}

module.exports = GoogleLoginComponentLocator
