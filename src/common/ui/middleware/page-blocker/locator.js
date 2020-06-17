const PageBlockerFlowMiddleware = require('.')

class PageBlockerFlowMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    bus           = this.locator.locate('infrastructure/bus'),
    eventComposer = this.locator.locate('core/event/composer')
    return new PageBlockerFlowMiddleware(bus, eventComposer)
  }
}

module.exports = PageBlockerFlowMiddlewareLocator
