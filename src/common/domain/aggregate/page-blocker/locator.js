const PageBlockerComponent = require('.')

class PageBlockerComponentLocator
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

    return new PageBlockerComponent(ui, bus)
  }
}

module.exports = PageBlockerComponentLocator
