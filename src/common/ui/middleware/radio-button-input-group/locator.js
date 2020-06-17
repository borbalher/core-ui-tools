const RadioButtonInputGroupFlowMiddleware = require('.')

class RadioButtonInputGroupFlowMiddlewareLocator
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

    return new RadioButtonInputGroupFlowMiddleware({
      actionComposer,
      eventComposer,
      bus
    })
  }
}

module.exports = RadioButtonInputGroupFlowMiddlewareLocator
