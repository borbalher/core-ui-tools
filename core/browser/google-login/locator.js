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
    bus = this.locator.locate('core/bus')

    return new GoogleLoginComponent(ui, bus)
  }
}

module.exports = GoogleLoginComponentLocator
