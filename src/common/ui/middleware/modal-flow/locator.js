const ModalOpenerFlowMiddleware = require('.')

class ModalOpenerFlowMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    actionComposer = this.locator.locate('core/action/composer')

    return new ModalOpenerFlowMiddleware({
      actionComposer
    })
  }
}

module.exports = ModalOpenerFlowMiddlewareLocator
