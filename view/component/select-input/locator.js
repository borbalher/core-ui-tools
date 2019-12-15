const SelectInputComponent = require('.')

class SelectInputComponentLocator
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

    return new SelectInputComponent(dom, bus)
  }
}

module.exports = SelectInputComponentLocator
