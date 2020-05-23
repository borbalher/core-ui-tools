const PageBlockerFlowMiddleware = require('.')

class PageBlockerFlowMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const bus = this.locator.locate('infrastructure/bus')
    return new PageBlockerFlowMiddleware(bus)
  }
}

module.exports = PageBlockerFlowMiddlewareLocator
