const TextInputComponent = require('.')

class TextInputComponentLocator
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

    return new TextInputComponent(dom, bus)
  }
}

module.exports = TextInputComponentLocator
