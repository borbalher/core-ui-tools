const RenderComponentListener = require('.')

class RenderComponentListenerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new RenderComponentListener(ui)
  }
}

module.exports = RenderComponentListenerLocator
