const PageClickObserver = require('.')

class PageClickObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new PageClickObserver(ui)
  }
}

module.exports = PageClickObserverLocator
