const TextInputGroupFlowMiddleware = require('.')

class TextInputGroupFlowMiddlewareLocator
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

    return new TextInputGroupFlowMiddleware({
      actionComposer,
      eventComposer,
      bus
    })
  }
}

module.exports = TextInputGroupFlowMiddlewareLocator
