const PaginationFlowMiddleware = require('.')

class PaginationFlowMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    actionComposer = this.locator.locate('core/action/composer'),
    eventComposer  = this.locator.locate('core/event/composer'),
    bus            = this.locator.locate('infrastructure/bus')

    return new PaginationFlowMiddleware({
      actionComposer,
      eventComposer,
      bus
    })
  }
}

module.exports = PaginationFlowMiddlewareLocator
