const PageBlockerComponent = require('core-ui-tools/view/ui/page-blocker')

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
    bus = this.locator.locate('core/bus')

    return new PageBlockerComponent(ui, bus)
  }
}

module.exports = PageBlockerComponentLocator
