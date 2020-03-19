const PasswordInputComponent = require('.')

class PasswordInputComponentLocator
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

    return new PasswordInputComponent(dom, bus)
  }
}

module.exports = PasswordInputComponentLocator
