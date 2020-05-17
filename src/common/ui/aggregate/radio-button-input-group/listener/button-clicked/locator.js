const ButtonClickedObserver = require('.')

class ButtonClickedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new ButtonClickedObserver(ui)
  }
}

module.exports = ButtonClickedObserverLocator
