const ButtonGroupInputComponent = require('.')

class ButtonGroupInputComponentLocator
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

    return new ButtonGroupInputComponent(dom, bus)
  }
}

module.exports = ButtonGroupInputComponentLocator
