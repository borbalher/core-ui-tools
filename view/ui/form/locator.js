const FormComponent = require('.')

class FormComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    ui  = this.locator.locate('core/ui'),
    bus = this.locator.locate('core/bus')

    return new FormComponent(ui, bus, undefined)
  }
}

module.exports = FormComponentLocator
