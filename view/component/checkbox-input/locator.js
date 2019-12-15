const CheckboxInputComponent = require('.')

class CheckboxInputComponentLocator
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

    return new CheckboxInputComponent(dom, bus)
  }
}

module.exports = CheckboxInputComponentLocator
