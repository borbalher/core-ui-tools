const OnValidateInputObserver = require('.')

class OnValidateInputObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    store             = this.locator.locate('core/store'),
    textInputComposer = this.locator.locate('ui/text-input-group/composer')
    return new OnValidateInputObserver(store, textInputComposer)
  }
}

module.exports = OnValidateInputObserverLocator
