const DateInputGroupFlowMiddleware = require('.')

class DateInputGroupFlowMiddlewareLocator
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

    return new DateInputGroupFlowMiddleware({
      actionComposer,
      eventComposer,
      bus
    })
  }
}

module.exports = DateInputGroupFlowMiddlewareLocator
