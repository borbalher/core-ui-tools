const UIBootstrap = require('.')

class UIBootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new UIBootstrap(ui)
  }
}

module.exports = UIBootstrapLocator
