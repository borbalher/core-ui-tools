const SelectInputGroupFlowMiddleware = require('.')

class SelectInputGroupFlowMiddlewareLocator
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

    return new SelectInputGroupFlowMiddleware({
      actionComposer,
      eventComposer,
      bus
    })
  }
}

module.exports = SelectInputGroupFlowMiddlewareLocator
