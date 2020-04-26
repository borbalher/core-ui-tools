const NextPageClickObserver = require('.')

class NextPageClickObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new NextPageClickObserver(ui)
  }
}

module.exports = NextPageClickObserverLocator
