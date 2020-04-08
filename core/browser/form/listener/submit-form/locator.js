const SubmitFormObserver = require('.')

class SubmitFormObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const form = this.locator.locate('ui/form')
    return new SubmitFormObserver(form)
  }
}

module.exports = SubmitFormObserverLocator
