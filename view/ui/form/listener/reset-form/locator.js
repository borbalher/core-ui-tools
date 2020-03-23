const ResetFormObserver = require('.')

class ResetFormObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const form = this.locator.locate('ui/form')
    return new ResetFormObserver(form)
  }
}

module.exports = ResetFormObserverLocator
