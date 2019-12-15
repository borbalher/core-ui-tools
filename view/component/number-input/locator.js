const NumberInputComponent = require('.')

class NumberInputComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    dom = this.locator.locate('core/dom'),
    bus = this.locator.locate('core/bus')

    return new NumberInputComponent(dom, bus)
  }
}

module.exports = NumberInputComponentLocator
